import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import hugo from '@freesewing/hugo'

function Hugo() {
  //let instance = new Pattern()
  let instance = new hugo({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={hugo} config={config} userLanguage="en" />
}

export default Hugo
