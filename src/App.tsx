import { BrowserRouter, Navigate, Route, RouterProvider, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import Configuracao from './components/paginas/Configuracao'
import Sorteio from './components/Sorteio'
import Home from './components/paginas/Home'
import { router } from './routes/routes'

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
