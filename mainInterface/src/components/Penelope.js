import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import penelope from '@freesewing/penelope'

function Penelope() {
  //let instance = new Pattern()
  let instance = new penelope({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={penelope} config={config} userLanguage="en" />
}

export default Penelope
