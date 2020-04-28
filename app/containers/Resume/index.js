/**
 *
 * Resume
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function Resume() {
  return (
    <div>
      <h1>My Resume!</h1>
      <p>My resume will be here.</p>
    </div>
  );
}

Resume.propTypes = {
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

export default compose(withConnect)(Resume);
