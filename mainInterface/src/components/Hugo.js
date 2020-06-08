import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import hugo from '@freesewing/hugo'

function Hugo() {
  //let instance = new Pattern()
  let instance = new hugo({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={hugo} config={config} userLanguage="en" />
}

export default Hugo
