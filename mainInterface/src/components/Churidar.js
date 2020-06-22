import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import churidar from '@freesewing/churidar'

function Churidar() {
  //let instance = new Pattern()
  let instance = new churidar({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={churidar} config={config} userLanguage="en" />
}

export default Churidar
