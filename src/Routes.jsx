import React from 'react';
import SuperForm from "./components/SuperForm";
import Api from "./components/api";
import App from "./App";
import FormHook from "./components/api";
import ReactEfect from "./ReactEfects";
import PokePerfil from "./components/PokePerfil";
import PokePerfilOne from "./components/PokePerfilOne";
import {Route} from "react-router-dom";
import Youtube from "./components/youtube/Youtube";



function Routes() {
    return (
        <div>
            <Route path="/" exact>
                <h1 className="pt-5 text-center">BIENVENIDOS A DOCTOPS</h1>
            </Route>
            <Route path="/api">
                <Api></Api>
            </Route>
            <Route path="/PokePerfil" exact>
                <PokePerfil></PokePerfil>
            </Route>
            <Route path="/PokePerfil/:id">
                <PokePerfilOne></PokePerfilOne>
            </Route>
            <Route path="/superapi">
                <App></App>
            </Route>
            <Route path="/reacteffects">
                <ReactEfect></ReactEfect>
            </Route>
            <Route path="/youtube">
                <Youtube></Youtube>
            </Route>
        </div>
    );
}

export default Routes;