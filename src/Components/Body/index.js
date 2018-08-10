import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './listItem';

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
          <ListItem
            key={item.id}
            item={item}
            completeItem={() => this.complete(item)}
            deleteItem={() => this.delete(item)}
          />
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
