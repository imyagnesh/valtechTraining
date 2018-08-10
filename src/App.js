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
       data: []
    }

    this.onAdd = this.onAdd.bind(this);
  }

  componentWillMount = () => {
    fetch('http://localhost:3000/Todo')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }
  

  onAdd(data) {
    const postData = {
      id: 2,
      task: data,
      status: 'P',
      created_date: new Date(),
      updated_date: new Date(),
    };
    fetch('http://localhost:3000/Todo',{
      method: 'POST',
      body:  JSON.stringify(postData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
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
