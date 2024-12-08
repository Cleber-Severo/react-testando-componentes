import '../styles/Configuracao.css'
import Cabecalho from '../Cabecalho'
import Rodape from '../Rodape'
import { Outlet } from 'react-router-dom'

const Configuracao = () => {
  return (
    <>
      <Cabecalho />
      <div className="wrapper-sorteador">
        <Outlet />
        <Rodape />
      </div>
    </>
  )
}

export default Configuracao
