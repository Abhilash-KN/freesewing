import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import suit from '@freesewing/suit'

function Suit() {
  //let instance = new Pattern()
  let instance = new suit({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={suit} config={config} userLanguage="en" />
}

export default Suit
