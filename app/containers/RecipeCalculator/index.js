/**
 *
 * RecipeCalculator
 *
 */

import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components';

import Button from '../../components/Button';
import Input from './Input';

const defaultItemVals = {
  calories: null,
  fat: null,
  carbs: null,
  protein: null,
  weight: null,
};

const Container = styled.div``;

const TotalsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

export function RecipeCalculator() {
  const [items, setItems] = useState([{ ...defaultItemVals }]);
  const [totals, setTotals] = useState({ ...defaultItemVals });

  const onAddItem = () => {
    setItems([...items, { ...defaultItemVals }]);
  };

  const onRemoveItem = index => {
    setItems(items.filter((item, i) => i !== index));
  };

  const onChangeItemVal = (e, index, key) => {
    const value = Number(e.target.value);
    const newItem = items[index];
    newItem[key] = value;

    const newItems = items;
    newItems[index] = newItem;
    setItems(newItems);

    const newTotals = {
      ...totals,
      [key]: items.reduce((prev, next) => prev + next[key], 0),
    };
    setTotals(newTotals);
  };

  return (
    <Container>
      <TotalsContainer>
        <p>Calories: {totals.calories}</p>
        <p>Fat: {totals.fat}</p>
        <p>Carbs: {totals.carbs}</p>
        <p>Protein: {totals.protein}</p>
        <p>Weight: {totals.weight}</p>
      </TotalsContainer>
      <ItemsContainer>
        {items.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`item ${i}`}>
            <h3>{`Item ${i + 1}:`}</h3>
            <Input
              item={item}
              i={i}
              text="Calories:"
              objKey="calories"
              onChange={onChangeItemVal}
            />
            <Input
              item={item}
              i={i}
              text="Fat:"
              objKey="fat"
              onChange={onChangeItemVal}
            />
            <Input
              item={item}
              i={i}
              text="Carbs:"
              objKey="carbs"
              onChange={onChangeItemVal}
            />
            <Input
              item={item}
              i={i}
              text="Protein:"
              objKey="protein"
              onChange={onChangeItemVal}
            />
            <Input
              item={item}
              i={i}
              text="Weight:"
              objKey="weight"
              onChange={onChangeItemVal}
            />
            <Button type="button" onClick={() => onRemoveItem(i)}>
              {`Remove Item ${i + 1}`}
            </Button>
          </div>
        ))}
      </ItemsContainer>
      <Button type="button" onClick={onAddItem}>
        Add Item
      </Button>
    </Container>
  );
}

RecipeCalculator.propTypes = {
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

export default compose(withConnect)(RecipeCalculator);
