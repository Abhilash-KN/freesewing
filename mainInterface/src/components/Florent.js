import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import florent from '@freesewing/florent'

function Florent() {
  //let instance = new Pattern()
  let instance = new florent({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={florent} config={config} userLanguage="en" />
}

export default Florent
