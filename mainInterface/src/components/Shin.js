import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import shin from '@freesewing/shin'

function Shin() {
  //let instance = new Pattern()
  let instance = new shin({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={shin} config={config} userLanguage="en" />
}

export default Shin
