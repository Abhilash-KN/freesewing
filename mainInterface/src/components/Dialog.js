import React, { Component } from 'react'
import './styles/Dialog.css'

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = { name: '' }
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleCancel = () => {
    this.props.handleDialogDisplay(false)
  }

  handleSave = () => {
    this.props.handleDialogDisplay(false)
    const dataToSaveInDB = {
      patternName: this.state.name,
      options: this.props.options
    }
    console.log(dataToSaveInDB)
  }

  render() {
    const { options } = this.props
    const optionList = Object.entries(options).map(([key, value]) => (
      <li>
        <span>{key}</span> : <span>{value}</span>
      </li>
    ))

    return (
      <div className="Dialog">
        <div className="Dialog-input">
          <label>Pattern Name :</label>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="Dialog-list">
          <ul> {optionList} </ul>
        </div>
        <div className="Dialog-btn-container">
          <button className="Dialog-btn" onClick={this.handleCancel}>
            CANCEL
          </button>
          <button className="Dialog-btn" onClick={this.handleSave}>
            SAVE
          </button>
        </div>
      </div>
    )
  }
}

export default Dialog
