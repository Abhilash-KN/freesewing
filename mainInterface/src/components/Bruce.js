import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import bruce from '@freesewing/bruce'

function Bruce() {
  //let instance = new Pattern()
  let instance = new bruce({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={bruce} config={config} userLanguage="en" />
}

export default Bruce
