import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import { useListaParticipantes } from "../state/hooks/useListaDeParticipantes"
import Sorteio from "../components/Sorteio"

jest.mock('../state/hooks/useListaDeParticipantes', () => {
  return {
    useListaParticipantes: jest.fn()
  }
})

describe('na pagina de sorteio', () => {
  const participantes = ['Ana', 'Catarina', 'Jorel']

  beforeEach(() => {
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })


  test('todos os participantes podem exibir o seu amigo secreto', () => {
    render(
      <RecoilRoot>
        <Sorteio />
      </RecoilRoot>
    )

    const opcoes = screen.queryAllByRole('option')
    expect(opcoes).toHaveLength(participantes.length)
  })
})