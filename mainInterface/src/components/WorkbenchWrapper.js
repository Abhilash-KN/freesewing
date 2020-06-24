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
  }

  componentDidMount() {
    fetchDressDetails(this.props.config.name, (response) => {
      this.setState({ data: response.data.msg })
    })
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
    const showTable = data.some((row) => row.isActive === 1)
    return (
      <div>
        <button onClick={this.handleClick} className="save-config">
          Add Apparel
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
