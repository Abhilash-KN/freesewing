import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import holmes from '@freesewing/holmes'

function Holmes() {
  //let instance = new Pattern()
  let instance = new holmes({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={holmes} config={config} userLanguage="en" />
}

export default Holmes
