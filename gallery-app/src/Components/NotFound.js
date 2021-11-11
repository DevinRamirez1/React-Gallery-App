import React from "react";
import { NavLink } from "react-router-dom";

//creates a page to show the results weren't found
const NotFound = () => {
    return (
        <ul>
            <li>
                <h3>404 Page Not Found</h3>
                <p>Sorry, your search found no results.</p>
                <NavLink to="/clouds">Home</NavLink>
            </li>
        </ul>
    );
}

export default NotFound