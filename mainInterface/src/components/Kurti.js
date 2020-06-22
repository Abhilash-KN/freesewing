import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import kurti from '@freesewing/kurti'

function Kurti() {
  //let instance = new Pattern()
  let instance = new kurti({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={kurti} config={config} userLanguage="en" />
}

export default Kurti
