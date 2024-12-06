import shuffle from "just-shuffle"
import { useListaParticipantes } from "./useListaDeParticipantes"
import { useSetRecoilState } from "recoil"
import { resultadoDoAmigoSecreto } from "../atom"

export const useSorteador = () => {

  const participantes = useListaParticipantes()

  const setResultado = useSetRecoilState(resultadoDoAmigoSecreto)
  
  return () => {
    const totalDeParticipantes = participantes.length
    const embaralhado = shuffle(participantes)
    
    const resultado = new Map<string, string>()

    for (let idx = 0; idx < totalDeParticipantes; idx++) {

      const idxAmigo = idx === totalDeParticipantes - 1 ? 0 : idx + 1 
      resultado.set(embaralhado[idx], embaralhado[idxAmigo])

      setResultado(resultado)
    }
  }
}