import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import theo from '@freesewing/theo'

function Theo() {
  //let instance = new Pattern()
  let instance = new theo({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={theo} config={config} userLanguage="en" />
}

export default Theo
