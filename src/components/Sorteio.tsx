import React from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'

const Sorteio = () => {
  const participantes = useListaParticipantes()
  
  return (
    <section>
        <form action="">
          <select name="participanteDaVez" id="participanteDaVez">
            {participantes.map(participante => 
              <option key={participante} >{participante}</option>)
            }
          </select>
        </form>
    </section>
  )
}

export default Sorteio
