import { createBrowserRouter } from 'react-router-dom'
import Configuracao from '../components/paginas/Configuracao'
import Home from '../components/paginas/Home'
import Sorteador from '../components/Sorteio'

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
