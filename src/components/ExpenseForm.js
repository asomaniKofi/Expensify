import React from "react";
const ExpenseForm = ()=>(
    <div>
        <form className="AddExpense">
        <input type="text" name="choice" placeholder="Expense Name"/>
        <input type="number" name="Price" placeholder="£0.00"/>
        <button className="RegularButton">Add Expense</button> 
        </form>
        <button>Clear Data</button>
    </div>
);
export default ExpenseForm;    