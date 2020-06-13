import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import wahid from '@freesewing/wahid'

function Wahid() {
  //let instance = new Pattern()
  let instance = new wahid({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={wahid} config={config} userLanguage="en" />
}

export default Wahid
