import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import sharara from '@freesewing/sharara'

function Sharara() {
  //let instance = new Pattern()
  let instance = new sharara({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={sharara} config={config} userLanguage="en" />
}

export default Sharara
