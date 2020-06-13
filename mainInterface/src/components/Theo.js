import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import theo from '@freesewing/theo'

function Theo() {
  //let instance = new Pattern()
  let instance = new theo({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={theo} config={config} userLanguage="en" />
}

export default Theo
