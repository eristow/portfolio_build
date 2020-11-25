import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

import Button from 'components/Button';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export function Work() {
  const [goToStock, setGoToStock] = useState(false);
  // const [goToRadio, setGoToRadio] = useState(false);
  const [goToTicTacToe, setGoToTicTacToe] = useState(false);

  return (
    <div>
      <h1>My Work</h1>
      {goToStock ? <Redirect to="stocks" /> : <></>}
      {/* {goToRadio ? <Redirect to="radio" /> : <></>} */}
      {goToTicTacToe ? <Redirect to="tictactoe" /> : <></>}
      <ButtonContainer>
        <Button type="button" onClick={() => setGoToStock(true)}>
          Stock App
        </Button>
        {/* <Button
          type="button"
          margin="10px 10px"
          onClick={() => setGoToRadio(true)}
        >
          Radio (WIP)
        </Button> */}
        <Button
          type="button"
          margin="0px 10px"
          onClick={() => setGoToTicTacToe(true)}
        >
          TicTacToe
        </Button>
      </ButtonContainer>
      <h3>Web DAW</h3>
      <ButtonContainer>
        <Button type="button">
          <a href="https://web-daw-frontend.herokuapp.com/">Web DAW Project</a>
        </Button>
        <Button type="button" margin="0px 10px">
          <a href="https://github.com/eristow/web-daw">
            Web DAW Front-End Code
          </a>
        </Button>
        <Button type="button" margin="0px 10px">
          <a href="https://github.com/eristow/web-daw-backend">
            Web DAW Back-End Code
          </a>
        </Button>
      </ButtonContainer>
    </div>
  );
}

Work.propTypes = {
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

export default compose(withConnect)(Work);
