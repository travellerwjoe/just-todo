import React, { Component } from 'react';
import Header from './Components/Header'
import Container from './Components/Container'
import TodoList from './Components/TodoList'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return ([
      <Header title="Just Todo" />,
      <Container>
        <TodoList label="未完成" />
        <TodoList label="已完成" />
      </Container>
    ]);
  }
}

export default App;
