import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import aaron from '@freesewing/aaron'

function Aaron() {
  //let instance = new Pattern()
  let instance = new aaron({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={aaron} config={config} userLanguage="en" />
}

export default Aaron
