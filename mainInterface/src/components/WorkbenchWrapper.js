import React, { Component } from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import Dialog from './Dialog'
import './styles/WorkbenchWrapper.css'

class WorkbenchWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = { showDialog: false, options: {} }
  }

  handleClick = () => {
    const gist = JSON.parse(window.localStorage.getItem('fs_gist'))
    this.setState((prevSt) => ({
      showDialog: true,
      options: {
        ...prevSt.options,
        ...gist.settings.options
      }
    }))
  }

  handleDialogDisplay = (bool) => {
    this.setState({ showDialog: bool })
  }

  render() {
    const { Pattern, config } = this.props
    const { showDialog, options } = this.state
    return (
      <div>
        <button onClick={this.handleClick} className="save-config">
          Save Configuration
        </button>
        <Workbench freesewing={freesewing} Pattern={Pattern} config={config} userLanguage="en" />
        {showDialog && (
          <Dialog
            options={options}
            pattern={config.name}
            handleDialogDisplay={this.handleDialogDisplay}
          />
        )}
      </div>
    )
  }
}

export default WorkbenchWrapper
