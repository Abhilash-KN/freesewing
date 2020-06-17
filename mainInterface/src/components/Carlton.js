import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import carlton from '@freesewing/carlton'

function Carlton() {
  //let instance = new Pattern()
  let instance = new carlton({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={carlton} config={config} userLanguage="en" />
}

export default Carlton
