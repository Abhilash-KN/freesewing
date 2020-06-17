import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import dress from '@freesewing/dress'

function Dress() {
  //let instance = new Pattern()
  let instance = new dress({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={dress} config={config} userLanguage="en" />
}

export default Dress
