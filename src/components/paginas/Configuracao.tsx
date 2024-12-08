import '../styles/Configuracao.css'
import Cabecalho from '../Cabecalho'
import { Outlet } from 'react-router-dom'

const Configuracao = () => {
  return (
    <>
      <Cabecalho />
      <div className="wrapper-sorteador">
        <Outlet />
      </div>
    </>
  )
}

export default Configuracao
