/**
 *
 * Stocks
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

const numStocks = 2;

export function Stocks() {
  const defaultStockVals = {};
  for (let i = 0; i < numStocks; i += 1) {
    defaultStockVals[i] = 0;
  }

  const [stockVals, setStockVals] = useState(defaultStockVals);

  const createStockInputs = () => {
    const stockInputs = [];
    for (let i = 0; i < numStocks; i += 1) {
      stockInputs.push(
        <div key={`stock${i}`}>
          <p>
            Stock {i + 1} New Stop Price: {stockVals[i] * 0.85}
          </p>
          <input
            value={stockVals[i]}
            onChange={e => {
              const stockValsCopy = JSON.parse(JSON.stringify(stockVals));
              stockValsCopy[i] = e.target.value;
              setStockVals(stockValsCopy);
            }}
          />
        </div>,
      );
    }
    return stockInputs;
  };

  return (
    <div>
      <h1>Stock Calculator</h1>
      {createStockInputs()}
    </div>
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
