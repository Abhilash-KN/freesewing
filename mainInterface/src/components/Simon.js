import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import simon from '@freesewing/simon'

function Simon() {
  //let instance = new Pattern()
  let instance = new simon({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={simon} config={config} userLanguage="en" />
}

export default Simon
