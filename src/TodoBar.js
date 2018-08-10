import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class TodoBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      xyz: '',
    };
  }

  onChange(e) {
    this.setState({ xyz: e.target.value });
  }

  render() {
    const { xyz } = this.state;
    return (
      <div>
        <input type="text" value={xyz} onChange={e => this.onChange(e)} />
      </div>
    );
  }
}

TodoBar.propTypes = {};

export default TodoBar;
