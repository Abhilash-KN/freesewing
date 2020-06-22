import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import florence from '@freesewing/florence'

function Florence() {
  //let instance = new Pattern()
  let instance = new florence({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={florence} config={config} userLanguage="en" />
}

export default Florence
