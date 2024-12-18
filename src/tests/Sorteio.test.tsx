import { fireEvent, render, screen } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import { useListaParticipantes } from '../state/hooks/useListaDeParticipantes'
import Sorteio from '../components/Sorteio'
import { useResultadoSorteio } from '../state/hooks/useResultadoSorteio'
import { act } from 'react-dom/test-utils'

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaParticipantes: jest.fn(),
  }
})

jest.mock('../state/hooks/useResultadoSorteio', () => {
  return {
    useResultadoSorteio: jest.fn(),
  }
})

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Jorel']

  const resultado = new Map([
    ['Ana', 'Jorel'],
    ['Catarina', 'Ana'],
    ['Jorel', 'Catarina'],
  ])

  beforeEach(() => {
    ;(useListaParticipantes as jest.Mock).mockReturnValue(participantes)
    ;(useResultadoSorteio as jest.Mock).mockReturnValue(resultado)
  })

  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length + 1)
  })

  test('o amigo secreto é exibido quando solicitado', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    })

    const botao = screen.getByRole('button')

    fireEvent.click(botao)

    const amigoSecreto = screen.getByRole('alert')

    expect(amigoSecreto).toBeInTheDocument()
  })

  test('o nome do amigo sorteado deve sumir após 5s', () => {
    jest.useFakeTimers()

    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const select = screen.getByPlaceholderText('Selecione o seu nome')

    fireEvent.change(select, {
      target: {
        value: participantes[0],
      },
    })

    const botao = screen.getByRole('button')

    fireEvent.click(botao)

    act(() => {
      jest.runAllTimers()
    })

    let amigoSecreto = screen.queryByRole('alert')

    expect(amigoSecreto).not.toBeInTheDocument()
  })
})
