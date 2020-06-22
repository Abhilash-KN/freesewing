import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import breanna from '@freesewing/breanna'

function Breanna() {
  //let instance = new Pattern()
  let instance = new breanna({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={breanna} config={config} userLanguage="en" />
}

export default Breanna
