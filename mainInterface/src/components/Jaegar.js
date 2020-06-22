import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import jaeger from '@freesewing/jaeger'

function Jaeger() {
  //let instance = new Pattern()
  let instance = new jaeger({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={jaeger} config={config} userLanguage="en" />
}

export default Jaeger
