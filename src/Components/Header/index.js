import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    onAdd: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      todo: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const { todo } = this.state;
    const { onAdd } = this.props;
    onAdd(todo);
  }

  render() {
    const { todo } = this.state;
    return (
      <div style={styles.container}>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="todo"
            value={todo}
            placeholder="Add TODO"
            onChange={this.onChange}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
