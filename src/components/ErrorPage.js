import React from "react";
import { Link} from "react-router-dom";

const ErrorPage = ()=>(
    <div>
    Uh-OH someones navigated out of bounds -<Link to="/">Go Back</Link>
    </div>
);
export default ErrorPage;