import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import carlita from '@freesewing/carlita'

function Carlita() {
  //let instance = new Pattern()
  let instance = new carlita({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={carlita} config={config} userLanguage="en" />
}

export default Carlita
