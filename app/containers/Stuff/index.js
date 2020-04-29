/**
 *
 * Stuff
 *
 */

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

export function Stuff() {
  const [goToStock, setGoToStock] = useState(false);
  const [goToRadio, setGoToRadio] = useState(false);

  return (
    <div>
      <h1>Other Stuff</h1>
      {goToStock ? <Redirect to="stocks" /> : <></>}
      {goToRadio ? <Redirect to="radio" /> : <></>}
      <ButtonContainer>
        <Button
          type="button"
          margin="10px 10px"
          onClick={() => setGoToStock(true)}
        >
          Stock App
        </Button>
        <Button
          type="button"
          margin="10px 10px"
          onClick={() => setGoToRadio(true)}
        >
          Radio
        </Button>
      </ButtonContainer>
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
