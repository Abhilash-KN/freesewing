import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import holmes from '@freesewing/holmes'

function Holmes() {
  //let instance = new Pattern()
  let instance = new holmes({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={holmes} config={config} userLanguage="en" />
}

export default Holmes
