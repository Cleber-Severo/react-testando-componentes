import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'
import { useNavigate } from 'react-router-dom'
import CustomBtn from './CustomBtn'
import PlayIcon from '../assets/PlayIcon'
import { useSorteador } from '../state/hooks/useSorteador'

const Rodape = () => {
  const participantes = useListaParticipantes()
  
  const navegarPara = useNavigate()

  const sortear = useSorteador()

  const iniciar = () => {
    sortear()

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