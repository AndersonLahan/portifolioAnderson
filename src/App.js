import React, { Fragment, Component } from 'react';
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'
import Info from './components/Info'
import Contato from './components/Contato'
import Rodape from './components/Footer'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Profile/>
        <Skills/>
        <Blog/>
        <Portfolio/>
        <Info/>
        <Contato/>
        <Rodape/>
      </Fragment>
    );
  }
}

export default App;
