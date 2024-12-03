import React from 'react'

import './styles/CustomBtn.css'

interface ICustomBtnProps {
  text: string
  icon?: JSX.Element
  disabled?: boolean
  onClick?: () => void
}

const CustomBtn = ({ icon, text, disabled, onClick }: ICustomBtnProps) => {
  return (
    <button className='custom-btn' onClick={onClick} disabled={disabled}>
      {icon}
      {text || ''}
    </button>
  )
}

export default CustomBtn