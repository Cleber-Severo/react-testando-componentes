import React, { CSSProperties } from 'react'

const titleStyle: CSSProperties = {
  color: '#4b69fd',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '48px',
  textAlign: 'center',
}

interface ITituloPrincipalProps {
  titulo: string
}

const TituloPrincipal = ({ titulo }: ITituloPrincipalProps) => {
  return <h2 style={titleStyle}>{titulo}</h2>
}

export default TituloPrincipal
