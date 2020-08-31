import { createSelector } from 'reselect';
import { initialState } from './cartReducer';

/**
 * Direct selector to the languageToggle state domain
 */
const selectItems = state => state.items || initialState;
const selectCartProducts = state => state.cartProducts || initialState;

/**
 * Select the language locale
 */

const makeSelectItems = () =>
  createSelector(
    selectItems,
    substate => substate.items
  );

const makeSelectCartProducts = () =>
  createSelector(
    selectCartProducts,
    substate => substate.cartProducts
  );
export { selectItems, makeSelectItems, selectCartProducts, makeSelectCartProducts  };
