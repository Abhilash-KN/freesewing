import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import sven from '@freesewing/sven'

function Sven() {
  //let instance = new Pattern()
  let instance = new sven({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={sven} config={config} userLanguage="en" />
}

export default Sven
