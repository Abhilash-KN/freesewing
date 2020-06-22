import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import brian from '@freesewing/brian'

function Brian() {
  //let instance = new Pattern()
  let instance = new brian({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={brian} config={config} userLanguage="en" />
}

export default Brian
