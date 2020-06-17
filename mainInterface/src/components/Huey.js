import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import huey from '@freesewing/huey'

function Huey() {
  //let instance = new Pattern()
  let instance = new huey({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={huey} config={config} userLanguage="en" />
}

export default Huey
