import React from "react";
import { NavLink} from "react-router-dom";

const HeaderModule = () =>(
    <div>
    <h1>Welcome to Expensify</h1>
    <NavLink exact={true} to="/" activeClassName="isActive">Home</NavLink>
    <NavLink exact={true} to="/create" activeClassName="isActive">Add Expense</NavLink>
    </div>
);

export default HeaderModule;