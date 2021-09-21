/**
 *
 * Stocks
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

import Input from '../../components/Input';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(200px, 100%), 1fr));
`;
const VariablesContainer = styled.div`
  margin-right: 30px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 175px;
  @media (max-width: 431px) {
    flex-direction: row;
  }
`;
const StocksContainer = styled.div``;
const Text = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const compute = (num, multiplier) =>
  Math.round((num * multiplier + Number.EPSILON) * 100) / 100;

export function Stocks() {
  const [numStocks, setNumStocks] = useState(7);
  const [numStocksArr, setNumStocksArr] = useState([
    ...Array(numStocks).keys(),
  ]);
  const [stockVals, setStockVals] = useState({
    ...numStocksArr.map(() => ''),
  });
  const [multiplier, setMultiplier] = useState(0.8);

  const onChangeNumStocks = e => {
    const num = Number(e.target.value);
    setNumStocks(num);
    setNumStocksArr([...Array(num).keys()]);
  };

  const onChangeStockVal = (e, num) => {
    const stockValsCopy = JSON.parse(JSON.stringify(stockVals));
    stockValsCopy[num] = e.target.value;
    setStockVals(stockValsCopy);
  };

  const onChangeMultiplier = e => {
    const newMultiplier = Number(e.target.value);
    setMultiplier(newMultiplier);
  };

  return (
    <>
      <h1>Stock Calculator</h1>
      <Container>
        <VariablesContainer>
          <div>
            <Text>Number of Stocks:</Text>
            <Input
              type="number"
              value={numStocks}
              onChange={onChangeNumStocks}
              min="1"
              max="10"
            />
          </div>
          <div>
            <Text>Multiplier</Text>
            <Input
              type="number"
              value={multiplier}
              onChange={onChangeMultiplier}
              min="0.0"
              max="1.0"
            />
          </div>
        </VariablesContainer>
        <StocksContainer>
          {numStocksArr.map(num => (
            <div key={`stock${num}`}>
              <Text>
                Stock {num + 1} New Stop Price:{' '}
                {compute(stockVals[num], multiplier)}
              </Text>
              <Input
                placeholder={0}
                type="number"
                value={stockVals[num]}
                onChange={e => onChangeStockVal(e, num)}
              />
            </div>
          ))}
        </StocksContainer>
      </Container>
    </>
  );
}

Stocks.propTypes = {
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

export default compose(withConnect)(Stocks);
