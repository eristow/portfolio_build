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
const NumStocksContainer = styled.div`
  margin-right: 30px;
`;
const StocksContainer = styled.div``;
const Text = styled.p`
  margin-bottom: 0px;
  margin-top: 0px;
`;

export const compute = num =>
  Math.round((num * 0.85 + Number.EPSILON) * 100) / 100;

export function Stocks() {
  const [numStocks, setNumStocks] = useState(7);
  const [numStocksArr, setNumStocksArr] = useState([
    ...Array(numStocks).keys(),
  ]);
  const [stockVals, setStockVals] = useState({
    ...numStocksArr.map(() => ''),
  });

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

  return (
    <>
      <h1>Stock Calculator</h1>
      <Container>
        <NumStocksContainer>
          <Text>Number of Stocks:</Text>
          <Input
            type="number"
            value={numStocks}
            onChange={onChangeNumStocks}
            min="1"
            max="10"
          />
        </NumStocksContainer>
        <StocksContainer>
          {numStocksArr.map(num => (
            <div key={`stock${num}`}>
              <Text>
                Stock {num + 1} New Stop Price: {compute(stockVals[num])}
              </Text>
              <Input
                placeholder={0}
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
