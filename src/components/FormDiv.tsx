import React, { ReactNode } from 'react'
import './styles/FormDiv.css'

interface IFormDivProps {
  children: ReactNode
}

const FormDiv = ({ children }: IFormDivProps) => {
  return <div className="form-div">{children}</div>
}

export default FormDiv
