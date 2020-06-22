import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import benjamin from '@freesewing/benjamin'

function Benjamin() {
  //let instance = new Pattern()
  let instance = new benjamin({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={benjamin} config={config} userLanguage="en" />
}

export default Benjamin
