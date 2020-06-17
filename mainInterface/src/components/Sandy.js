import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import sandy from '@freesewing/sandy'

function Sandy() {
  //let instance = new Pattern()
  let instance = new sandy({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={sandy} config={config} userLanguage="en" />
}

export default Sandy
