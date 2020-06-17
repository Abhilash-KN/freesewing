import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import carlita from '@freesewing/carlita'

function Carlita() {
  //let instance = new Pattern()
  let instance = new carlita({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={carlita} config={config} userLanguage="en" />
}

export default Carlita
