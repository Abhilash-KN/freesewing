import React, { Component } from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import Dialog from './Dialog'
import OptionsTable from './OptionsTable'
import './styles/WorkbenchWrapper.css'
import axios from 'axios'

class WorkbenchWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false,
      data: [],
      config: this.props.config
    }
  }

  fetchDressDetails = () => {
    axios
      .get('/dress-details', {
        params: {
          package: this.props.config.name
        }
      })
      .then((response) => {
        if (response.data.success === true) {
          this.setState({ data: response.data.msg })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.fetchDressDetails()
  }

  handleClick = () => {
    this.setState({ showDialog: true })
  }

  handleDialogDisplay = (bool) => {
    this.setState({ showDialog: bool })
    this.fetchDressDetails()
  }

  updateConfig = (optionsData) => {
    const newConfig = this.state.config
    Object.entries(optionsData).forEach(([key, value]) => {
      if (newConfig.options[key].hasOwnProperty('dflt')) {
        newConfig.options[key].dflt = value
      } else if (typeof newConfig.options[key] === 'number') {
        newConfig.options[key] = value
      } else if (newConfig.options[key].hasOwnProperty('bool')) {
        newConfig.options[key].bool = value === 'true' ? true : false
      } else if (newConfig.options[key].hasOwnProperty('pct')) {
        newConfig.options[key].pct = value
      } else if (newConfig.options[key].hasOwnProperty('mm')) {
        newConfig.options[key].mm = value
      } else if (newConfig.options[key].hasOwnProperty('deg')) {
        newConfig.options[key].deg = value
      } else {
        newConfig.options[key].count = value
      }
    })

    this.setState({ config: newConfig })
  }

  render() {
    const { Pattern } = this.props
    const { showDialog, data, config } = this.state
    return (
      <div>
        <button onClick={this.handleClick} className="save-config">
          Add Apparel
        </button>
        <Workbench freesewing={freesewing} Pattern={Pattern} config={config} userLanguage="en" />
        {showDialog && (
          <Dialog pattern={config.name} handleDialogDisplay={this.handleDialogDisplay} />
        )}
        {data.length > 0 && (
          <div className="options-table">
            <OptionsTable
              data={data}
              package={config.name}
              updateConfig={this.updateConfig}
              refreshDressDetails={this.fetchDressDetails}
            />
          </div>
        )}
      </div>
    )
  }
}

export default WorkbenchWrapper
