import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import sharara from '@freesewing/sharara'

function Sharara() {
  //let instance = new Pattern()
  let instance = new sharara({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={sharara} config={config} userLanguage="en" />
}

export default Sharara
