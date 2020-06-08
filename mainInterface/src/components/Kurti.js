import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import kurti from '@freesewing/kurti'

function Kurti() {
  //let instance = new Pattern()
  let instance = new kurti({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={kurti} config={config} userLanguage="en" />
}

export default Kurti
