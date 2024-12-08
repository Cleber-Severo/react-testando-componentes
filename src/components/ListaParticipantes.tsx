import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'

import './styles/ListaParticipantes.css'

function ListaParticipantes() {
  const participantes: string[] = useListaParticipantes()

  return (
    <ul className="lista-participantes">
      {participantes.map((participante) => (
        <li key={participante}>{participante}</li>
      ))}
    </ul>
  )
}

export default ListaParticipantes
