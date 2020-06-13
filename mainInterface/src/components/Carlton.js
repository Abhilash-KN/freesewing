import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import carlton from '@freesewing/carlton'

function Carlton() {
  //let instance = new Pattern()
  let instance = new carlton({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={carlton} config={config} userLanguage="en" />
}

export default Carlton
