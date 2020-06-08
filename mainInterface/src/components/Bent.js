import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import bent from '@freesewing/bent'

function Bent() {
  //let instance = new Pattern()
  let instance = new bent({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={bent} config={config} userLanguage="en" />
}

export default Bent
