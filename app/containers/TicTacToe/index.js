/**
 *
 * TicTacToe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function TicTacToe() {
  return (
    <div>
      <h1>TicTacToe Page</h1>
      <p>test</p>
    </div>
  );
}

TicTacToe.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(TicTacToe);
