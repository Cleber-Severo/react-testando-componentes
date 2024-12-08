import React, { CSSProperties, useState } from 'react'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'
import TituloPrincipal from './TituloPrincipal'
import FormDiv from './FormDiv'
import CustomBtn from './CustomBtn'
import DiceIcon from '../assets/DiceIcon'
import PaperPlane from '../assets/PaperPlane'

const centerFlexColumnStyle: CSSProperties = { display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px' }

const textStyle: CSSProperties = {
  fontWeight: '400',
  fontSize: '20px',
  lineHeight: '30px',
  color: 'rgba(68, 68, 68, 1)',
  maxWidth: '475px',
  width: '100%',
  textAlign: 'center',
  marginBottom: '24px',
}

const amigoSorteadoStyle: CSSProperties = {
  color: 'rgba(254, 101, 43, 0.99)',
  fontFamily: 'Poppins',
  fontSize: '25px',
  fontWeight: '400',
  lineHeight: '37.5px',
  textAlign: 'center',
  textUnderlinePosition: 'from-font',
  textDecorationSkipInk: 'none',
  margin: '14px 0',
}

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState<string>('')
  const [amigoSecreto, setAmigoSecreto] = useState<string>('')

  const participantes = useListaParticipantes()
  const resultado = useResultadoSorteio()

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez) || '')
    }
  }

  return (
    <section style={centerFlexColumnStyle}>
      <TituloPrincipal titulo="Quem vai tirar o papelzinho ?" />

      <form action="" onSubmit={sortear} style={centerFlexColumnStyle}>
        <FormDiv>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={(e) => {
              setParticipanteDaVez(e.target.value)
            }}
          >
            {participantes.map((participante) => (
              <option key={participante}>{participante}</option>
            ))}
          </select>
        </FormDiv>
        <p style={textStyle}>Clique em em sortear para ver quem é seu amigo secreto!</p>
        <CustomBtn icon={<DiceIcon />} text={'Sortear!'} type="submit" />
      </form>

      {amigoSecreto && (
        <p role="alert" style={amigoSorteadoStyle}>
          {amigoSecreto}
        </p>
      )}

      <PaperPlane />
    </section>
  )
}

export default Sorteio
