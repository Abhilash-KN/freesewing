import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import simone from '@freesewing/simone'

function Simone() {
  //let instance = new Pattern()
  let instance = new simone({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={simone} config={config} userLanguage="en" />
}

export default Simone
