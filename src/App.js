import React, { Component } from 'react';
import './App.css';
import TodoBar from './TodoBar';

class App extends Component {
  componentWillMount = () => {};

  render() {
    return (
      <div>
        <TodoBar type="todo" value="todo app" />
      </div>
    );
  }
}

export default App;
