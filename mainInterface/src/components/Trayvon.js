import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import trayvon from '@freesewing/trayvon'

function Trayvon() {
  //let instance = new Pattern()
  let instance = new trayvon({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={trayvon} config={config} userLanguage="en" />
}

export default Trayvon
