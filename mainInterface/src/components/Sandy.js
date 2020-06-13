import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import sandy from '@freesewing/sandy'

function Sandy() {
  //let instance = new Pattern()
  let instance = new sandy({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={sandy} config={config} userLanguage="en" />
}

export default Sandy
