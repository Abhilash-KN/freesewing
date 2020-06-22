import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import diana from '@freesewing/diana'

function Diana() {
  //let instance = new Pattern()
  let instance = new diana({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={diana} config={config} userLanguage="en" />
}

export default Diana
