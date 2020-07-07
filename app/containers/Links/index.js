/**
 *
 * Links
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

export function Links() {
  return (
    <div>
      <h1>Links</h1>
      <ul className="links">
        <li>
          <a href="https://www.linkedin.com/in/evan-ristow-1a2477102/">
            LinkedIn
          </a>
        </li>
        {/* <li>
          <a href="https://soundcloud.com/duosyncrasy">SoundCloud</a>
        </li>
        <li>
          <a href="https://clyp.it/user/xtlhzxlg">Clyp.it</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UC4jepeFzPS98d-JQQrjsHfA">
            YouTube
          </a>
        </li> */}
      </ul>
    </div>
  );
}

Links.propTypes = {
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

export default compose(withConnect)(Links);
