import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import dhoti from '@freesewing/dhoti'

function Dhoti() {
  //let instance = new Pattern()
  let instance = new dhoti({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={dhoti} config={config} userLanguage="en" />
}

export default Dhoti
