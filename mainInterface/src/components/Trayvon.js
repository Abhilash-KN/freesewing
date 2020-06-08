import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import trayvon from '@freesewing/trayvon'

function Trayvon() {
  //let instance = new Pattern()
  let instance = new trayvon({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={trayvon} config={config} userLanguage="en" />
}

export default Trayvon
