import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import breanna from '@freesewing/breanna'

function Breanna() {
  //let instance = new Pattern()
  let instance = new breanna({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={breanna} config={config} userLanguage="en" />
}

export default Breanna
