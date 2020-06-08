import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import tamiko from '@freesewing/tamiko'

function Tamiko() {
  //let instance = new Pattern()
  let instance = new tamiko({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={tamiko} config={config} userLanguage="en" />
}

export default Tamiko
