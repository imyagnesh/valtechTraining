import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import actions from './Actions';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.onAdd = this.onAdd.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount = () => {
    const {
      actions: { getTodo },
    } = this.props;
    getTodo();
  };

  onAdd(item) {
    const {
      todo: { data },
    } = this.props;
    const postData = {
      id: data.length + 1,
      task: item,
      status: 'P',
      created_date: new Date(),
      updated_date: new Date(),
    };
    const {
      actions: { postTodo },
    } = this.props;
    postTodo(postData);
  }

  onComplete(item) {
    const postData = {
      ...item,
      status: 'C',
    };
    const {
      actions: { putTodo },
    } = this.props;

    putTodo(item.id, postData);
  }

  onDelete(item) {
    const {
      actions: { deleteTodo },
    } = this.props;

    deleteTodo(item.id);
  }

  render() {
    const {
      todo: { data, loading },
    } = this.props;
    console.log(data, loading);
    return (
      <React.Fragment>
        {loading && (
        <span>
Loading...
        </span>
        )}
        <Header onAdd={this.onAdd} />
        <Body data={data} onComplete={this.onComplete} onDelete={this.onDelete} />
        <Footer />
      </React.Fragment>
    );
  }
}

App.propTypes = {
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  todo: state.todo,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
