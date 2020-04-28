/**
 *
 * Stuff
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Button from 'components/Button';

export function Stuff() {
  const [goToStock, setGoToStock] = useState(false);

  return (
    <div>
      <h1>Other Stuff</h1>
      {goToStock ? (
        <Redirect to="stocks" />
      ) : (
        <Button type="button" onClick={() => setGoToStock(true)}>
          Stock App
        </Button>
      )}
    </div>
  );
}

Stuff.propTypes = {
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

export default compose(withConnect)(Stuff);
