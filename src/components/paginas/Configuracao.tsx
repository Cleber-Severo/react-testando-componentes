import '../styles/Configuracao.css'
import Cabecalho from '../Cabecalho'
import { Outlet } from 'react-router-dom'

export function Configuracao() {
  return (
    <div data-testid="config-test">
      <Cabecalho />
      <div className="wrapper-sorteador">
        <Outlet />
      </div>
    </div>
  )
}
