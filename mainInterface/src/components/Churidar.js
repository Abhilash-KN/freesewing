import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import churidar from '@freesewing/churidar'

function Churidar() {
  //let instance = new Pattern()
  let instance = new churidar({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={churidar} config={config} userLanguage="en" />
}

export default Churidar
