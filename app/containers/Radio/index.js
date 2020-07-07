/**
 *
 * Radio
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useHowl, Play } from 'rehowl';
// import AWS from 'aws-sdk';

// import audioFile from 'assets/TestSong.mp3';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Button from 'components/Button';
import makeSelectRadio from './selectors';
import reducer from './reducer';
import saga from './saga';

// const fileName = 'New Body (ft. Ty Dolla $ign _ Nicki Minaj).mp3';
const audioUrl1 =
  'https://portfolio-eristow.s3.amazonaws.com/New+Body+(ft.+Ty+Dolla+%24ign+_+Nicki+Minaj).mp3';

const audioUrl2 =
  'https://portfolio-eristow.s3.amazonaws.com/Alien+(ft.+Ant+Clemons).mp3';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  background: #333;
  border: 2px solid black;
  border-radius: 4px;
  padding: 10px;
`;

const ControlContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
`;

const Input = styled.input`
  width: 100px;
  margin-right: 20px;
`;

export function Radio() {
  useInjectReducer({ key: 'radio', reducer });
  useInjectSaga({ key: 'radio', saga });

  const srcs = [audioUrl1, audioUrl2];
  const [play, setPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [mute, setMute] = useState(false);
  let current = 0;
  const [src, setSrc] = useState(srcs[current]);
  // const { howl, state, load } = useHowl({ src });
  const { howl, state } = useHowl({ src });

  // TODO: get loading via SDK working? Is it needed when URLs work?
  // const ID = process.env.AWS_ID;
  // const SECRET = process.env.AWS_SECRET;
  // const BUCKET_NAME = 'portfolio-eristow';

  // const s3 = new AWS.S3({
  //   accessKeyId: ID,
  //   secretAccessKey: SECRET,
  // });

  // useEffect(() => {
  //   const params = {
  //     Bucket: BUCKET_NAME,
  //     Key: fileName,
  //   };

  //   s3.getObject(params, (err, data) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       console.log(data.Body);
  //       // srcs.push(data.Body);
  //       // console.log(srcs);
  //       // setSrc(srcs[1]);
  //       // load();
  //     }
  //   });
  // }, []);

  const nextSong = () => {
    console.log('next song');
    if (current + 1 > srcs.length - 1) {
      current = 0;
    } else {
      current += 1;
    }

    setSrc(srcs[current]);
  };

  return (
    <Container>
      {state === 'loaded' ? (
        <>
          <Play
            howl={howl}
            pause={!play}
            volume={volume}
            mute={mute}
            onEnd={() => nextSong()}
          />
          <h2>
            Now Playing:{' '}
            {decodeURIComponent(src)
              .replace('https://portfolio-eristow.s3.amazonaws.com/', '')
              .replace('.mp3', '')
              .split('+')
              .join(' ')
              .split('_')
              .join('&')}
          </h2>
          <Button type="button" onClick={() => setPlay(!play)}>
            {play ? 'Pause' : 'Play'}
          </Button>
          <ControlContainer>
            <Input
              id="volume"
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={volume}
              onChange={evt => setVolume(parseFloat(evt.target.value))}
            />
            <Button type="button" onClick={() => setMute(!mute)}>
              {mute ? 'Unmute 🔊' : 'Mute 🔇'}
            </Button>
          </ControlContainer>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
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
