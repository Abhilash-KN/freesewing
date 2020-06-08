import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import florence from '@freesewing/florence'

function Florence() {
  //let instance = new Pattern()
  let instance = new florence({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={florence} config={config} userLanguage="en" />
}

export default Florence
