import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';

import './App.css';

const styles = {
  app: {
    flex: 1,
    flexDirection: 'column',
  },
};

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.onAdd = this.onAdd.bind(this);
  }

  onAdd(data) {
    alert(data);
  }

  render() {
    return (
      <div style={styles.app}>
        <Header onAdd={this.onAdd} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
