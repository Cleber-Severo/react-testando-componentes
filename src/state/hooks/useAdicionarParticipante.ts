import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantesState } from "../atom"

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaParticipantesState)
  const lista = useRecoilValue(listaParticipantesState)
  const setErro = useSetRecoilState(erroState)

  return (nome: string) => {
    if(lista.includes(nome)) {
      setErro('Nomes duplicados não são permitidos!')
      setTimeout(() => { setErro('') }, 3000)
      return
    }
    
    return (setLista(listaAtual => [...listaAtual, nome]) )
  }
}