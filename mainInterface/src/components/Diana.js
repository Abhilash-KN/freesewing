import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import diana from '@freesewing/diana'

function Diana() {
  //let instance = new Pattern()
  let instance = new diana({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={diana} config={config} userLanguage="en" />
}

export default Diana
