import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import benjamin from '@freesewing/benjamin'

function Benjamin() {
  //let instance = new Pattern()
  let instance = new benjamin({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={benjamin} config={config} userLanguage="en" />
}

export default Benjamin
