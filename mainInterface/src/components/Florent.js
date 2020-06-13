import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import florent from '@freesewing/florent'

function Florent() {
  //let instance = new Pattern()
  let instance = new florent({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={florent} config={config} userLanguage="en" />
}

export default Florent
