/**
 *
 * Radio
 *
 */

import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useHowl, Play } from 'rehowl';
import AWS from 'aws-sdk';

import audioFile from 'assets/TestSong.mp3';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/Button';
import makeSelectRadio from './selectors';
import reducer from './reducer';
import saga from './saga';

const fileName = '2 New Body (ft. Ty Dolla $ign _ Nicki Minaj).mp3';
const audioUrl1 =
  'https://portfolio-eristow.s3.amazonaws.com/2+New+Body+(ft.+Ty+Dolla+%24ign+_+Nicki+Minaj).mp3';

const audioUrl2 = 'https://portfolio-eristow.s3.amazonaws.com/6+Alien+(ft.+Ant+Clemons).mp3';

export function Radio() {
  useInjectReducer({ key: 'radio', reducer });
  useInjectSaga({ key: 'radio', saga });

  const [play, setPlay] = useState(false);
  const srcs = [audioUrl1, audioUrl2];
  const [src, setSrc] = useState(srcs[1]);
  const { howl, state, load } = useHowl({ src });

  // TODO: get loading via SDK working? Is it needed when URLs work?
  const ID = process.env.AWS_ID;
  const SECRET = process.env.AWS_SECRET;
  const BUCKET_NAME = 'portfolio-eristow';

  const s3 = new AWS.S3({
    accessKeyId: ID,
    secretAccessKey: SECRET,
  });

  useEffect(() => {
    const params = {
      Bucket: BUCKET_NAME,
      Key: fileName,
    };

    s3.getObject(params, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data.Body);
        // srcs.push(data.Body);
        // console.log(srcs);
        // setSrc(srcs[1]);
        // load();
      }
    });
  }, []);

  const nextSong = () => {
    console.log('next song');
  };

  return (
    <div>
      {state === 'loaded' ? (
        <>
          <Play howl={howl} pause={!play} onEnd={() => nextSong()} />
          <Button type="button" onClick={() => setPlay(!play)}>
            {play ? 'Pause' : 'Play'}
          </Button>
        </>
      ) : (
        <p>Loading...</p>
      )}
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
