import React, { Component } from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import Dialog from './Dialog'
import OptionsTable from './OptionsTable'
import { fetchDressDetails } from '../services/apiCalls'
import './styles/WorkbenchWrapper.css'

class WorkbenchWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showDialog: false,
      data: [],
      config: this.props.config
    }
    this.defaultConfig = {}
  }

  componentDidMount() {
    fetchDressDetails(this.props.config.name, (response) => {
      this.setState({ data: response.data.msg })
    })
    this.defaultConfig = this.state.config
  }

  handleClick = () => {
    this.setState({ showDialog: true })
  }

  handleDialogDisplay = (bool) => {
    this.setState({ showDialog: bool })
    fetchDressDetails(this.props.config.name, (response) => {
      this.setState({ data: response.data.msg })
    })
  }

  updateConfig = (optionsData) => {
    this.setState({ config: this.defaultConfig })
    const { config } = this.state
    const newOptions = {}
    Object.entries(optionsData).forEach(([key, value]) => {
      if (config.options[key].hasOwnProperty('dflt')) {
        newOptions[key] = {
          dflt: value,
          list: [...config.options[key].list]
        }
      } else if (typeof config.options[key] === 'number') {
        newOptions[key] = value
      } else if (config.options[key].hasOwnProperty('bool')) {
        newOptions[key] = { bool: value === 'true' ? true : false }
      } else if (config.options[key].hasOwnProperty('pct')) {
        newOptions[key] = {
          pct: parseFloat(value) * 100,
          min: config.options[key].min,
          max: config.options[key].max
        }
      } else if (config.options[key].hasOwnProperty('mm')) {
        newOptions[key] = {
          mm: value,
          min: config.options[key].min,
          max: config.options[key].max
        }
      } else if (config.options[key].hasOwnProperty('deg')) {
        newOptions[key] = {
          deg: value,
          min: config.options[key].min,
          max: config.options[key].max
        }
      } else {
        newOptions[key] = {
          count: value,
          min: config.options[key].min,
          max: config.options[key].max
        }
      }
    })

    this.setState((prevSt) => ({
      ...prevSt,
      config: {
        ...prevSt.config,
        options: {
          ...prevSt.config.options,
          ...newOptions
        }
      }
    }))
  }

  handleReset = () => {
    const localGist = JSON.parse(localStorage.getItem('fs_gist'))
    delete localGist.settings.options
    localStorage.setItem('fs_gist', JSON.stringify(localGist))
    this.setState({ config: this.defaultConfig })
  }

  render() {
    console.log('rrrrrrrr')
    const { Pattern } = this.props
    const { showDialog, data, config } = this.state
    const showTable = data.some((row) => row.isActive === 1)
    return (
      <div>
        <button onClick={this.handleClick} className="save-config">
          Add Apparel
        </button>
        <button onClick={this.handleReset} className="reset-config">
          RESET
        </button>
        <Workbench freesewing={freesewing} Pattern={Pattern} config={config} userLanguage="en" />
        {showDialog && (
          <Dialog pattern={config.name} handleDialogDisplay={this.handleDialogDisplay} />
        )}
        {data.length > 0 && showTable && (
          <div className="options-table">
            <OptionsTable
              data={data}
              package={config.name}
              updateConfig={this.updateConfig}
              refreshDressDetails={() =>
                fetchDressDetails(config.name, (response) => {
                  this.setState({ data: response.data.msg })
                })
              }
            />
          </div>
        )}
      </div>
    )
  }
}

export default WorkbenchWrapper
