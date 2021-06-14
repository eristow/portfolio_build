import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { FaChartLine, FaRegCircle, FaMusic, FaQuestion } from 'react-icons/fa';
import { GiRabbit } from 'react-icons/gi';
import { ImCross, ImSpoonKnife } from 'react-icons/im';

import Button from 'components/Button';

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
  @media (max-width: 480px) {
    display: block;
  }
`;

const H2 = styled.h2`
  margin-bottom: 12px;
`;

export function Work() {
  const [goToStock, setGoToStock] = useState(false);
  // const [goToRadio, setGoToRadio] = useState(false);
  const [goToTicTacToe, setGoToTicTacToe] = useState(false);
  const [goToRecipe, setGoToRecipe] = useState(false);

  return (
    <div>
      <h1>My Work</h1>
      {goToStock && <Redirect to="stocks" />}
      {/* {goToRadio && <Redirect to="radio" />} */}
      {goToTicTacToe && <Redirect to="tictactoe" />}
      {goToRecipe && <Redirect to="recipe" />}
      <H2>Web DAW</H2>
      <ButtonContainer>
        <a href="https://web-daw-frontend.herokuapp.com/">
          <Button type="button" margin="0px 10px 0px 0px">
            <FaMusic /> Web DAW Site
          </Button>
        </a>
        <a href="https://github.com/eristow/web-daw">
          <Button type="button" margin="0px 10px">
            Web DAW Front-End Code
          </Button>
        </a>
        <a href="https://github.com/eristow/web-daw-backend">
          <Button type="button" margin="0px 10px">
            Web DAW Back-End Code
          </Button>
        </a>
      </ButtonContainer>
      <H2>Date Night Questions</H2>
      <ButtonContainer>
        <a href="https://master.d7vp4hauoyn5j.amplifyapp.com/">
          <Button type="button" margin="0px 10px 0px 0px">
            <FaQuestion /> Date Night Site
          </Button>
        </a>
        <a href="https://github.com/eristow/date-night-coding-challenge">
          <Button type="button" margin="0px 10px">
            Date Night Code
          </Button>
        </a>
      </ButtonContainer>
      <H2>Other</H2>
      <ButtonContainer>
        <a href="https://evanristow.com/habbit-rabbit">
          <Button type="button" margin="0px 10px 0px 0px">
            <GiRabbit /> Habbit Rabbit
          </Button>
        </a>
        <Button
          type="button"
          margin="0px 10px 0px 0px"
          onClick={() => setGoToStock(true)}
        >
          <FaChartLine /> Stock App
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
          onClick={() => setGoToRecipe(true)}
        >
          <ImSpoonKnife /> Recipe Calculator
        </Button>
        <Button
          type="button"
          margin="0px 10px"
          onClick={() => setGoToTicTacToe(true)}
        >
          <ImCross /> TicTacToe <FaRegCircle />
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
