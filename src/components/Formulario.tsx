import React, { useRef, useState } from 'react'
import { useAdicionarParticipante } from '../state/hooks/useAdicionarParticipante'
import { useMensagemDeErro } from '../state/hooks/useMensagemDeErro'

import './styles/Formulario.css'
import ProfileIcon from '../assets/ProfileIcon'
import TituloPrincipal from './TituloPrincipal'
import FormDiv from './FormDiv'

function Formulario() {
  const [nome, setNome] = useState('')

  const inputRef = useRef<HTMLInputElement>(null)
  const adicionarNaLista = useAdicionarParticipante()

  const mensagemDeErro = useMensagemDeErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    adicionarNaLista(nome)

    setNome('')
    inputRef.current?.focus()
  }

  return (
    <form onSubmit={adicionarParticipante} className="form-amigo-secreto">
      <TituloPrincipal titulo="Vamos começar!" />

      <FormDiv>
        <ProfileIcon />
        <input ref={inputRef} value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Insira os nomes dos participantes" />

        <button disabled={!nome}>Adicionar</button>
      </FormDiv>
      {mensagemDeErro && <p role="alert">{mensagemDeErro}</p>}
    </form>
  )
}

export default Formulario
