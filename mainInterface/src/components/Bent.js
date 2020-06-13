import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import bent from '@freesewing/bent'

function Bent() {
  //let instance = new Pattern()
  let instance = new bent({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={bent} config={config} userLanguage="en" />
}

export default Bent
