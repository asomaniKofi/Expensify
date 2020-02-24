import { createStore, combineReducers } from 'redux';
import expensesReducer from "../reducers/ExpensesReducers";
import filtersReducer from "../reducers/FilterReducer";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filtersReducer
    })
  );

  return store;
};