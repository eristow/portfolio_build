/**
 *
 * TicTacToe
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import './index.css';
import Game from './Game';

export function TicTacToe() {
  return (
    <div>
      <Game />
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
