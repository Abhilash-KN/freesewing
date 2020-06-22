import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import waralee from '@freesewing/waralee'

function Waralee() {
  //let instance = new Pattern()
  let instance = new waralee({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={waralee} config={config} userLanguage="en" />
}

export default Waralee
