import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import jaeger from '@freesewing/jaeger'

function Jaeger() {
  //let instance = new Pattern()
  let instance = new jaeger({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={jaeger} config={config} userLanguage="en" />
}

export default Jaeger
