import React from 'react'
import WorkbenchWrapper from './WorkbenchWrapper'
import salvar from '@freesewing/salvar'

function Salvar() {
  //let instance = new Pattern()
  let instance = new salvar({
    sa: 10
  })
  let config = instance.config

  return <WorkbenchWrapper Pattern={salvar} config={config} userLanguage="en" />
}

export default Salvar
