import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import huey from '@freesewing/huey'

function Huey() {
  //let instance = new Pattern()
  let instance = new huey({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={huey} config={config} userLanguage="en" />
}

export default Huey
