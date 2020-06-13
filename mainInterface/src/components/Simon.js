import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import simon from '@freesewing/simon'

function Simon() {
  //let instance = new Pattern()
  let instance = new simon({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={simon} config={config} userLanguage="en" />
}

export default Simon
