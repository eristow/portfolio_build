import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the radio state domain
 */

const selectRadioDomain = state => state.radio || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Radio
 */

const makeSelectRadio = () =>
  createSelector(
    selectRadioDomain,
    substate => substate,
  );

export default makeSelectRadio;
export { selectRadioDomain };
