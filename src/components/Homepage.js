import React from "react";
import ConnectedList from "./ExpensesList";
import ExpenseListFilters from "./ExpensesListFilters";

const Homepage = ()=>(
    <div>
        <ExpenseListFilters />
        <ConnectedList />
    </div>
);
export default Homepage;