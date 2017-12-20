import React, { Component } from 'react';
import Header from './Components/Header'
import Container from './Components/Container'
import Todo from './Components/Todo'
import logo from './logo.svg';
import './App.css';
import DevTools from 'mobx-react-devtools'

class App extends Component {

  render() {
    return ([
      <Header title="Just Todo" />,
      <Container>
        <Todo />
      </Container>,
      <DevTools />
    ]);
  }
}

export default App;
