import React, { Component } from 'react'
import { uploadDressDetails } from '../services/apiCalls'
import './styles/Dialog.css'

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleImageChange = (e) => {
    this.setState({ file: e.target.files[0] })
  }

  handleCancel = () => {
    this.props.handleDialogDisplay(false)
  }

  handleSave = () => {
    const formData = new FormData()
    formData.append('dressName', this.state.name)
    formData.append('packageName', this.props.pattern)
    formData.append('draftImage', this.state.file)
    uploadDressDetails(formData, this.props.handleDialogDisplay)
  }

  render() {
    return (
      <div className="Dialog">
        <div className="Dialog-input">
          <label>Dress Name : </label>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </div>
        <div className="Dialog-image">
          <p>Upload Draft Image : </p>
          <input type="file" onChange={this.handleImageChange} />
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
