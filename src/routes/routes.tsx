import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/paginas/Home'
import Sorteador from '../components/Sorteio'
import { Configuracao } from '../components/paginas/Configuracao'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Configuracao />,
    children: [
      {
        path: '', // Default route, equivalent to "/"
        element: <Home />,
      },
      {
        path: 'sorteio',
        element: <Sorteador />,
      },
    ],
  },
])
