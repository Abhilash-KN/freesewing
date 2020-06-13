import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import penelope from '@freesewing/penelope'

function Penelope() {
  //let instance = new Pattern()
  let instance = new penelope({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={penelope} config={config} userLanguage="en" />
}

export default Penelope
