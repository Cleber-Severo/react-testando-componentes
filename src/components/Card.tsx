//src/componentes/Card/index.tsx

import React from "react"

import './styles/Card.css'

const Card: React.FC = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export default Card