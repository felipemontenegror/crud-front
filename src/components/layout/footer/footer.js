import React from 'react'
import './footer.css'

import imgLogo from '../../../assets/img/cbf.png'

const Footer = () => (
    <footer>
        <div className="projectName">
        CBF :: Registro Nacional de Torcedores e Clubes Brasileiros Fake - Todos os direitos reservados
      </div>
        <div className="copyRight">
            <img src={imgLogo} alt="" />
        </div>
    </footer>
)


export default Footer
