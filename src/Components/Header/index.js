import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';

class Header extends Component {
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
    const { classes } = this.props;
    const { todo } = this.state;
    return (
      <form
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          backgroundColor: '#3D8BE1',
          padding: '0 20px',
        }}
        onSubmit={this.onSubmit}
      >
        <TextField
          label="Add TODO"
          placeholder="Add TODO"
          fullWidth
          name="todo"
          margin="normal"
          value={todo}
          onChange={this.onChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
    );
  }
}

export default Header;
