import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";

const UserCrud = (props) => {
    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const schema = yup.object({
        pokedex: yup.number('numero imbecil')
            .positive('debe de ser un numero positivo')
            .max(898,'marica mira vien'),
    }).required();

    const { register, handleSubmit, reset,formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });
    
    // esta funcion llama el props addPoke de App.js la cual agrega el nuevo pokemon
    const RegisterPokedex = data => {
        document.getElementById('btn_pokedex').setAttribute('disabled',true);
        const api = url + data.pokedex;
        axios.get(api)
            .then(res => {
                const Poke_api = res.data;
                props.addPoke(Poke_api);
                reset();
            })
            .catch(error => {
                alert('Ha ocurrido un error');
                console.error('Mensaje del error:'+ error);
            });;
        document.getElementById('btn_pokedex').removeAttribute('disabled');
    };
    return ( 
        <div>
            <form onSubmit={handleSubmit(RegisterPokedex)}>
                <div className="mb-4">
                    <p>Pokemon (Pokedex)</p>
                    <input  {...register("pokedex")} className="form-control" type="text"/>
                    {errors.pokedex && <p  className="text-danger">{errors.pokedex.message}</p>}
                </div>
                <button id="btn_pokedex" className="btn btn-success">Anexar</button>
            </form>
        </div>
     );
}
 
export default UserCrud;