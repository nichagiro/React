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
import Pokemon from './components/pokemon/Pokemon';
import DetailPoke from './components/pokemon/DetailPoke';
import Favorites from './components/pokemon/Favorites';
import Post from './components/Posts/Post';
import Computadors from './components/computadores/Computadors';
import FormCompu from './components/computadores/FormCompu';
import Pruebas from './components/pruebas';
import Mui from './components/mui/index';




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
            <Route path="/redux">
                <Pokemon></Pokemon>
            </Route>
            <Route path="/detailpoke/:name">
                <DetailPoke></DetailPoke>
            </Route>
            <Route path="/favorites">
                <Favorites></Favorites>
            </Route>
            <Route path="/posts">
                <Post></Post>
            </Route>
            <Route exact path="/computadores">
                <Computadors></Computadors>
            </Route>
            <Route path="/computadores/crear">
                <FormCompu></FormCompu>
            </Route>
            <Route path="/pruebas">
                <Pruebas></Pruebas>
            </Route>
            <Route path="/mui">
                <Mui></Mui>
            </Route>
        </div>
    );
}

export default Routes;