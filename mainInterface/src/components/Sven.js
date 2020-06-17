import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import sven from '@freesewing/sven'

function Sven() {
  //let instance = new Pattern()
  let instance = new sven({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={sven} config={config} userLanguage="en" />
}

export default Sven
