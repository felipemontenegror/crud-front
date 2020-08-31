import React, { useState } from 'react';


import Header from './components/layout/header/header'
import Footer from './components/layout/footer/footer'
import Menu from './components/layout/nav/nav'
import Login from './components/login/login'  //importei login mas nao foi 

import routes from './routes'


function App() {
  // simplifica a coleta de informações das variaveis
  const [page, setPage] = useState('Login') // tirei List e coloquei Login
  const rotaSelecionada = routes[page]

  const ComponentSelecionado = rotaSelecionada.component

  // const { component: ComponentSelecionado } = routes[page]

  const isShowMenu = (rota) => rota.showMenu
    ? <Menu pagina={rota} mudaPagina={setPage} />
    : ""


  // render
  return (
    <div>
      <Header tituloDoSite="CENTRAL DE USUÁRIOS" />
      <main>
        {/* 
         verifica se o menu deve ser renderizado
         sim: Mostra o menu
         não: mostra string vazia 
         */}
        {isShowMenu(rotaSelecionada)}

        {/* component de rotas dinamico */}
        <ComponentSelecionado mudaPagina={setPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
