import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.complete = this.complete.bind(this);
    this.delete = this.delete.bind(this);
  }

  complete(item) {
    const { onComplete } = this.props;
    onComplete(item);
  }

  delete(item) {
    const { onDelete } = this.props;
    onDelete(item);
  }

  render() {
    const { data } = this.props;
    return (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        }}
      >
        {data.map(item => (
          <div key={item.id}>
            <span style={item.status === 'C' ? { textDecoration: 'line-through' } : {}}>
              {item.task}
            </span>
            {item.status !== 'C' && (
              <input type="button" value="Complete" onClick={() => this.complete(item)} />
            )}
            <input type="button" value="Delete" onClick={() => this.delete(item)} />
          </div>
        ))}
      </div>
    );
  }
}

Body.propTypes = {
  data: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
};

export default Body;
