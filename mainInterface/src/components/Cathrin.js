import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import cathrin from '@freesewing/cathrin'

function Cathrin() {
  //let instance = new Pattern()
  let instance = new cathrin({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={cathrin} config={config} userLanguage="en" />
}

export default Cathrin
