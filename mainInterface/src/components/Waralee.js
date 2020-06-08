import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import waralee from '@freesewing/waralee'

function Waralee() {
  //let instance = new Pattern()
  let instance = new waralee({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={waralee} config={config} userLanguage="en" />
}

export default Waralee
