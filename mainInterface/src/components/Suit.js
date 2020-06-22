import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import suit from '@freesewing/suit'

function Suit() {
  //let instance = new Pattern()
  let instance = new suit({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={suit} config={config} userLanguage="en" />
}

export default Suit
