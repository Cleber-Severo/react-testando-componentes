import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import CustomBtn from './CustomBtn'
import PlayIcon from '../assets/PlayIcon'

const Rodape = () => {
  const participantes = useListaParticipantes()
  
  const navegarPara = useNavigate()

  const iniciar = () => {
    navegarPara('/sorteio')
  }
  
  return (
    <footer>
      <CustomBtn 
        text='Iniciar uma brincadeira'
        disabled={participantes.length < 3}
        icon={<PlayIcon />}
        onClick={iniciar}
      />
    </footer>
  )
}

export default Rodape