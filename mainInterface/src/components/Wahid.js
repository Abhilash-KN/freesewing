import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import wahid from '@freesewing/wahid'

function Wahid() {
  //let instance = new Pattern()
  let instance = new wahid({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={wahid} config={config} userLanguage="en" />
}

export default Wahid
