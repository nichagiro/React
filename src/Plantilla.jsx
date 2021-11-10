import React from "react";
import {BrowserRouter as Router,Switch,Link} from "react-router-dom";
import NavLink from "./components/NavLink";
import Routes from "./Routes";

const Plantilla = () => {
    return ( 
        <div>
            <Router>
                <nav className="p-3 navbar shadow navbar-expand-lg navbar-light bg-light d-flex justify-content-around">
                    <div className="w-25">
                        <Link to="/" className="navbar-brand">Inicio</Link>
                    </div>
                    <NavLink></NavLink>
                </nav>
                <Switch>
                   <Routes></Routes>
                </Switch>
            </Router>
        </div>
     );
}
 
export default Plantilla;