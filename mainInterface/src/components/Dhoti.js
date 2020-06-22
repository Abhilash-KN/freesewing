import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import dhoti from '@freesewing/dhoti'

function Dhoti() {
  //let instance = new Pattern()
  let instance = new dhoti({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={dhoti} config={config} userLanguage="en" />
}

export default Dhoti
