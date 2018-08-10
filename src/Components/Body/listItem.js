import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ListItem = ({ item, completeItem, deleteItem }) => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    }}
  >
    <div
      style={{
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        padding: 10,
      }}
      key={item.id}
    >
      <div
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <span style={item.status === 'C' ? { textDecoration: 'line-through' } : {}}>
          {item.task}
        </span>
      </div>
      {item.status !== 'C' && (
        <div
          style={{
            padding: 10,
          }}
        >
          <Button variant="contained" color="primary" onClick={() => completeItem(item)}>
            Complete
          </Button>
        </div>
      )}
      <div
        style={{
          padding: 10,
        }}
      >
        <Button variant="contained" color="secondary" onClick={() => deleteItem(item)}>
          Delete
        </Button>
      </div>
    </div>
  </div>
);

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  completeItem: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default ListItem;
