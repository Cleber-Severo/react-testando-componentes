import React from 'react'

import '../styles/Configuracao.css'
import Cabecalho from '../Cabecalho'
import Formulario from '../Formulario'
import ListaParticipantes from '../ListaParticipantes'
import Rodape from '../Rodape'

function Configuracao() {

  return (
    <>
      <Cabecalho />  
      <div className='wrapper-sorteador'>
        <Formulario /> 
        <ListaParticipantes /> 
        <Rodape /> 
      </div>      
    </>  
  )
}

export default Configuracao