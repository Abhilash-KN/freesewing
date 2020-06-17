import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import cathrin from '@freesewing/cathrin'

function Cathrin() {
  //let instance = new Pattern()
  let instance = new cathrin({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={cathrin} config={config} userLanguage="en" />
}

export default Cathrin
