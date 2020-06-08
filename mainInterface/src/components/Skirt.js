import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import skirt from '@freesewing/skirt'

function Skirt() {
  //let instance = new Pattern()
  let instance = new skirt({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={skirt} config={config} userLanguage="en" />
}

export default Skirt
