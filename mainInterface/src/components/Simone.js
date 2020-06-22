import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import simone from '@freesewing/simone'

function Simone() {
  //let instance = new Pattern()
  let instance = new simone({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={simone} config={config} userLanguage="en" />
}

export default Simone
