import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'

function ListaParticipantes() {
  const participantes: string[] = useListaParticipantes()
  
  return (
    <ul>
      {participantes.map(participante => <li key={participante} >{participante}</li>)}
    </ul>
  )
}

export default ListaParticipantes