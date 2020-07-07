import React from 'react';
import PropTypes from 'prop-types';

const Square = ({ value, onClick }) => {
  // TODO: convert to StyledComponents?
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} type="button" onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Square;
