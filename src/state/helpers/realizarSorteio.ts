import shuffle from "just-shuffle"

export const realizarSorteio = (participantes: string[]) => { 
  const totalDeParticipantes = participantes.length
  const embaralhado = shuffle(participantes)
  const resultado = new Map<string, string>()

  for (let idx = 0; idx < totalDeParticipantes; idx++) {
    const idxAmigo = idx === totalDeParticipantes - 1 ? 0 : idx + 1 
    resultado.set(embaralhado[idx], embaralhado[idxAmigo])
  }

  return resultado
 }