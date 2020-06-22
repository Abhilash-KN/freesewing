import React from 'react'
import freesewing from '@freesewing/core'
import Workbench from '@freesewing/components/Workbench'
import 'typeface-roboto-condensed'
import '@freesewing/css-theme'
import salvar from '@freesewing/salvar'

function Salvar() {
  //let instance = new Pattern()
  let instance = new salvar({
    sa: 10
  })
  let config = instance.config

  return <Workbench freesewing={freesewing} Pattern={salvar} config={config} userLanguage="en" />
}

export default Salvar
