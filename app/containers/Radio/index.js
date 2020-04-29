/**
 *
 * Radio
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useHowl, Play } from 'rehowl';
import audioFile from 'assets/TestSong.mp3';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/Button';
import makeSelectRadio from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Radio() {
  useInjectReducer({ key: 'radio', reducer });
  useInjectSaga({ key: 'radio', saga });

  const [play, setPlay] = useState(false);
  const { howl } = useHowl({ src: audioFile });

  return (
    <div>
      <Play howl={howl} pause={!play} />
      <Button type="button" onClick={() => setPlay(!play)}>
        {play ? 'Pause' : 'Play'}
      </Button>
    </div>
  );
}

Radio.propTypes = {
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  radio: makeSelectRadio(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Radio);
