import React from 'react';
import {NavLink} from "react-router-dom";


function NavLinkComponent() {
    return (
        <div className="d-flex">
            <NavLink to="/api" className="nav-link" activeClassName="text-danger fw-bold">Api </NavLink >
            <NavLink to="/superapi" className="nav-link" activeClassName="text-success fw-bold">SuperApi</NavLink >
            <NavLink to="/reacteffects" className="nav-link" activeClassName="text-warning fw-bold">Effects</NavLink >
            <NavLink to="/PokePerfil" className="nav-link" activeClassName="text-dark fw-bold">PokePerfil</NavLink >
            <NavLink to="/youtube" className="nav-link" activeClassName="text-danger fw-bold">Youtube</NavLink >
            <NavLink to="/redux" className="nav-link" activeClassName="text-primary fw-bold">Redux</NavLink >
            <NavLink to="/posts" className="nav-link" activeClassName="text-secondary fw-bold">Posts</NavLink >
            <NavLink to="/computadores" className="nav-link" activeClassName="text-info fw-bold">Computadores</NavLink >
            <NavLink to="/mui" className="nav-link" activeClassName="text-info fw-bold">Mui</NavLink >
            <NavLink to="/pruebas" className="nav-link" activeClassName="text-success fw-bold">Prueba</NavLink >
        </div>
    );
}

export default NavLinkComponent;