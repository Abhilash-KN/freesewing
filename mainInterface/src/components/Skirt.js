import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import skirt from '@freesewing/skirt'

function Skirt() {
  //let instance = new Pattern()
  let instance = new skirt({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={skirt} config={config} userLanguage="en" />
}

export default Skirt
