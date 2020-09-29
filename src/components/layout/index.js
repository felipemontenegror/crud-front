import React from 'react';
import Header from '../../components/layout/header/header'
import Footer from '../../components/layout/footer/footer'

// import { Container } from './styles';

const layout = (props) => {
    return (
        <div>
            <Header {...props} title="GERENCIADOR DE USUÁRIOS" />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )

}

export default layout;

