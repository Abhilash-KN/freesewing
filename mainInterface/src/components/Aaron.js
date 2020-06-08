import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import aaron from '@freesewing/aaron'

function Aaron() {
  //let instance = new Pattern()
  let instance = new aaron({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={aaron} config={config} userLanguage="en" />
}

export default Aaron
