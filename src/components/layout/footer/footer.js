import React from 'react'
import './footer.css'

import imgLogo from '../../../assets/img/soccer.png'

const Footer = () => (
    <footer>
        <div className="projectName">
        ROTCB :: Registro Oficial de Torcedores e Clubes Brasileiros - Todos os direitos reservados
      </div>
        <div className="copyRight">
            <img src={imgLogo} alt="" />
        </div>
    </footer>
)


export default Footer
