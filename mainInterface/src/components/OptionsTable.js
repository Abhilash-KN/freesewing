import React, { Component } from 'react'
import axios from 'axios'
import ImageDialog from './ImageDialog'
import './styles/OptionsTable.css'

export default class OptionsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImageDiv: false,
      clickedButtonId: '',
      selectValue: this.getSelectValueObj()
    }
  }

  refactorData = (data) => {
    const refactoredData = {}
    let dressSet = new Set()
    data.forEach((item) => {
      dressSet.add(item.dressName)
    })
    let dressArray = Array.from(dressSet)
    dressArray.forEach((dress) => {
      refactoredData[dress] = {}
      refactoredData[dress].options = {}
    })
    data.forEach((row) => {
      refactoredData[row.dressName]['options'][row.optionName] = row.value
      refactoredData[row.dressName]['draftImage'] = row.draftImage
      refactoredData[row.dressName]['dressId'] = row.id
      refactoredData[row.dressName]['isVerified'] = row.isVerified
    })
    return refactoredData
  }

  getSelectValueObj = () => {
    const obj = {}
    Object.entries(this.refactorData(this.props.data)).forEach(([key, value]) => {
      obj[key] = value.isVerified
    })
    return obj
  }

  openImage = (e) => {
    this.setState({
      showImageDiv: true,
      clickedButtonId: e.target.id
    })
  }

  closeImage = () => {
    this.setState({
      showImageDiv: false,
      clickedButtonId: ''
    })
  }

  handleSave = (e) => {
    const gist = JSON.parse(localStorage.getItem('fs_gist'))
    const options = gist.settings.options

    // Object.entries(options).
    // console.log(JSON.stringify(options))
    // console.log(e.target.id);
    if (options) {
      // saving the current option configurations in localStorage
      localStorage.setItem(`fs_${this.props.package}-options`, `${JSON.stringify(options)}`)

      // saving the current option configurations in database
      axios
        .post('/option-configs', {
          dressId: e.target.id,
          options: JSON.stringify(options)
        })
        .then((response) => {
          alert('Option configurations successfully saved in the database.')
          this.props.refreshDressDetails()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  handleSet = (e) => {
    const optionsData = this.refactorData(this.props.data)[e.target.id].options
    this.props.updateConfig(optionsData)
  }

  handleChange = (e) => {
    const newSelectValue = this.state.selectValue
    newSelectValue[e.target.id] = e.target.value === '1' ? 1 : 0
    this.setState({ selectValue: newSelectValue })

    axios
      .patch('/dress-details', {
        dressName: e.target.id,
        changes: JSON.stringify({ isVerified: e.target.value === '1' ? 1 : 0 })
      })
      .then((response) => {
        alert(`Dress status successfully changed in the database.`)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { showImageDiv, clickedButtonId, selectValue } = this.state
    const refactoredData = this.refactorData(this.props.data)
    const rows = Object.entries(refactoredData).map(([key, value]) => (
      <tr key={value.dressId}>
        <td>{key}</td>
        <td>
          {showImageDiv && clickedButtonId === key && <ImageDialog imageName={value.draftImage} />}

          {clickedButtonId !== key && (
            <button id={key} onClick={this.openImage}>
              View image
            </button>
          )}

          {showImageDiv && clickedButtonId === key && (
            <button onClick={this.closeImage}>Close</button>
          )}
        </td>
        <td>
          <button id={key} onClick={this.handleSet}>
            SET
          </button>
        </td>
        <td>
          <button id={value.dressId} onClick={this.handleSave}>
            SAVE
          </button>
        </td>
        <td>
          <select id={key} value={selectValue[key]} onChange={this.handleChange}>
            <option value={0}>Under Review</option>
            <option value={1}>Verified</option>
          </select>
        </td>
      </tr>
    ))
    return (
      <table className="OptionsTable">
        <thead>
          <tr>
            <th>Dress Name</th>
            <th>Draft Image</th>
            <th>Set Configuration</th>
            <th>Save Configuration</th>
            <th>Dress Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
