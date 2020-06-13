import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import shin from '@freesewing/shin'

function Shin() {
  //let instance = new Pattern()
  let instance = new shin({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={shin} config={config} userLanguage="en" />
}

export default Shin
