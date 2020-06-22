import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import dress from '@freesewing/dress'

function Dress() {
  //let instance = new Pattern()
  let instance = new dress({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={dress} config={config} userLanguage="en" />
}

export default Dress
