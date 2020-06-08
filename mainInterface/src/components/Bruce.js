import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import bruce from '@freesewing/bruce'

function Bruce() {
  //let instance = new Pattern()
  let instance = new bruce({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={bruce} config={config} userLanguage="en" />
}

export default Bruce
