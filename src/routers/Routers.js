import { BrowserRouter, Route, Switch} from "react-router-dom";
import Homepage from "C:/Users/Kofi/Documents/ReactJs/Section2/src/components/Homepage.js";
import ExpenseForm from "C:/Users/Kofi/Documents/ReactJs/Section2/src/components/ExpenseForm.js";
import ErorrPage from "C:/Users/Kofi/Documents/ReactJs/Section2/src/components/ErrorPage";
import HeaderModule from "C:/Users/Kofi/Documents/ReactJs/Section2/src/components/HeaderModule";

const Routers = ()=> (
    <BrowserRouter>
        <div>
        <HeaderModule />
            <Switch>
                <Route path="/" component={Homepage} exact={true}/>
                <Route path="/create" component={ExpenseForm} exact={true}/>   
                <Route component={ErorrPage} />   
            </Switch>
        </div>
    </BrowserRouter>
);

export default Routers;