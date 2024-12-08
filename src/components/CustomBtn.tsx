import React from 'react'

import './styles/CustomBtn.css'

interface ICustomBtnProps {
  text: string
  icon?: JSX.Element
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: () => void
}

const CustomBtn = ({ icon, text, type = 'button', disabled, onClick }: ICustomBtnProps) => {
  return (
    <button className="custom-btn" onClick={onClick} disabled={disabled} type={type}>
      {icon}
      {text || ''}
    </button>
  )
}

export default CustomBtn
