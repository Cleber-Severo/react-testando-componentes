import React from 'react'
import Formulario from '../Formulario'
import ListaParticipantes from '../ListaParticipantes'
import Rodape from '../Rodape'
import Cabecalho from '../Cabecalho'

import '../styles/Configuracao.css'

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