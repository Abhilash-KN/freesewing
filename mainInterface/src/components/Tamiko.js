import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import tamiko from '@freesewing/tamiko'

function Tamiko() {
  //let instance = new Pattern()
  let instance = new tamiko({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={tamiko} config={config} userLanguage="en" />
}

export default Tamiko
