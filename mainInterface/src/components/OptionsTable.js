import React, { Component } from 'react'
import { uploadOptionConfigs, updateDressDetails, updateDraftImage } from '../services/apiCalls'
import ImageDialog from './ImageDialog'
import './styles/OptionsTable.css'

export default class OptionsTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImageDiv: false,
      file: null,
      clickedButtonId: '',
      showUpdateImageDialog: false,
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
      refactoredData[row.dressName]['isActive'] = row.isActive
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

  updateImage = (bool) => {
    this.setState({ showUpdateImageDialog: bool })
  }

  handleImageChange = (e) => {
    this.setState({ file: e.target.files[0] })
  }

  updatedImageUpload = (e) => {
    const formData = new FormData()
    formData.append('dressName', e.target.id)
    formData.append('newDraftImage', this.state.file)
    updateDraftImage(formData, this.props.refreshDressDetails)
    this.updateImage(false)
  }

  handleSave = (e) => {
    const gist = JSON.parse(localStorage.getItem('fs_gist'))
    const options = gist.settings.options

    if (options) {
      // saving the current option configurations in database
      const data = {
        dressId: e.target.id,
        options: JSON.stringify(options)
      }
      uploadOptionConfigs(data, this.props.refreshDressDetails)
    }
  }

  handleSet = (e) => {
    const optionsData = this.refactorData(this.props.data)[e.target.id].options
    if (!optionsData.hasOwnProperty('null')) {
      const localGist = JSON.parse(localStorage.getItem('fs_gist'))
      localGist.settings.options = optionsData
      localStorage.setItem('fs_gist', JSON.stringify(localGist))
      this.props.updateConfig(optionsData, localGist)
    }
  }

  handleChange = (e) => {
    const newSelectValue = this.state.selectValue
    newSelectValue[e.target.id] = e.target.value === '1' ? 1 : 0
    this.setState({ selectValue: newSelectValue })
    const data = {
      dressName: e.target.id,
      changes: JSON.stringify({ isVerified: e.target.value === '1' ? 1 : 0 })
    }
    updateDressDetails(data, this.props.refreshDressDetails)
  }

  handleDelete = (e) => {
    const data = {
      dressName: e.target.id,
      changes: JSON.stringify({ isActive: 0 })
    }
    updateDressDetails(data, this.props.refreshDressDetails)
  }

  render() {
    const { showImageDiv, clickedButtonId, selectValue, showUpdateImageDialog } = this.state
    const refactoredData = this.refactorData(this.props.data)
    const rows = Object.entries(refactoredData).map(
      ([key, value]) =>
        value.isActive === 1 && (
          <tr key={value.dressId}>
            <td>{key}</td>
            <td>
              {showImageDiv && clickedButtonId === key && !showUpdateImageDialog && (
                <ImageDialog imageName={value.draftImage} />
              )}

              {showImageDiv && clickedButtonId === key && showUpdateImageDialog && (
                <div className="update-image">
                  <p>Upload new image : </p>
                  <input type="file" onChange={this.handleImageChange} />
                  <div className="update-image-btn-container">
                    <button onClick={() => this.updateImage(false)} className="update-image-btn">
                      CANCEL
                    </button>
                    <button id={key} onClick={this.updatedImageUpload} className="update-image-btn">
                      UPLOAD
                    </button>
                  </div>
                </div>
              )}

              {clickedButtonId !== key && (
                <button id={key} onClick={this.openImage}>
                  View image
                </button>
              )}

              {showImageDiv && clickedButtonId === key && (
                <div>
                  <button onClick={this.closeImage}>Close image</button>
                  <button onClick={() => this.updateImage(true)}>Update image</button>
                </div>
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
            <td>
              <button id={key} onClick={this.handleDelete}>
                DELETE
              </button>
            </td>
          </tr>
        )
    )
    return (
      <table className="OptionsTable">
        <thead>
          <tr>
            <th>Dress Name</th>
            <th>Draft Image</th>
            <th>Set Configuration</th>
            <th>Save Configuration</th>
            <th>Dress Status</th>
            <th>Delete Dress</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
