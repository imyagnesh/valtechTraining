import React, { Component } from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import Api from './utils/apiUtil'

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
      loading: false,
       data: [],
       error: false
    }

    this.onAdd = this.onAdd.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount = () => {
    this.setState({loading:  true})
    setTimeout(() => {
      Api.jsonService()
    .then(json => this.setState({data: json, loading: false}))
    .catch(err => this.setState({error: err, loading: false}))
    }, 2000)
    
    
  }
  

  onAdd(item) {
    const {data} = this.state;
    const postData = {
      id: data.length + 1,
      task: item,
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
    .then(res => res.json())
    .then(json => this.setState({data:[...data,json], loading: false }))
    .catch(err => this.setState({error: err, loading: false}));
  }

  onComplete(item) {
    const postData = {
      ...item,status: 'C',
    };
    const {data} = this.state;
    const index = data.findIndex(x => x.id === item.id);
    fetch(`http://localhost:3000/Todo/${item.id}`,{
      method: 'PUT',
      body:  JSON.stringify(postData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => this.setState({
      data: [...data.splice(0,index),res,...data.splice(index + 1)]
    }))
    .catch(err => console.log(err));
  }

  onDelete(item) {
    const {data} = this.state;
    const index = data.findIndex(x => x.id === item.id);
    fetch(`http://localhost:3000/Todo/${item.id}`,{
      method: 'Delete',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(res => res.json())
    .then(res => this.setState({
      data: [...data.splice(0,index),...data.splice(index + 1)]
    }))
    .catch(err => console.log(err));
  } 

  render() {
    const {data, loading} = this.state;
    return (
      <div style={styles.app}>
        {loading && <span>Loading...</span>}
        <Header onAdd={this.onAdd} />
        <Body data={data} onComplete={this.onComplete} onDelete={this.onDelete} />
        <Footer />
      </div>
    );
  }
}

export default App;
