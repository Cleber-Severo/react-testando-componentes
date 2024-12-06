import React, { useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState<string>('')
  const [amigoSecreto, setAmigoSecreto] = useState<string>('')


  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez) || '')
    }
  }

  return (
    <section>
      <form action="" onSubmit={sortear} >
        <select 
          required 
          name="participanteDaVez" 
          id="participanteDaVez" 
          placeholder='Selecione o seu nome'
          value={participanteDaVez}
          onChange={(e) => { setParticipanteDaVez(e.target.value) }}
        >
          {participantes.map(participante =>
            <option key={participante} >{participante}</option>)
          }
        </select>

        <button>Sortear</button>
      </form>

      {amigoSecreto && <p role='alert'>{amigoSecreto}</p>}
    </section>
  )
}

export default Sorteio
