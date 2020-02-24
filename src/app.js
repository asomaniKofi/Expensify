import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import Routers from "./routers/Routers";
import configureStore from "./store/Store";
import {addExpense} from "./actions/Expenses";
import {setTextFilter} from "./actions/Filters";
import getVisibileExpenses from "./selectors/ExpenseSelector";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();


store.dispatch(addExpense({description:"Water Bill", note:"More expensive than usual",amount:60}));
store.dispatch(addExpense({description:"Gas Bill", note:"More expensive than usual",amount:600}));
store.dispatch(setTextFilter('Water'));

const jsx = (
    <Provider store={store}>
        <Routers />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById("app"));