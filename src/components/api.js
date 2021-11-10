import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';

const FormHook = () => {
    const [poke, setpoke] = useState([])
    const [DisabledBtn, setDisabledBtn] = useState(false)

    const url = 'https://pokeapi.co/api/v2/pokemon/'

    const schema = yup.object({
        pokedex: yup.number().positive().required().max(898),
      }).required();

    const { register, handleSubmit,reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });

    const viewData = (data) => {
        setDisabledBtn(true)
        const api = url+data.pokedex;
        axios.get(api)
            .then(res => {
                const data = res.data;
                    setpoke([
                        ...poke,
                        data
                    ])
                    reset();
                    setDisabledBtn(false)

            })
            .catch(error => {
                setDisabledBtn(false)
                console.log(error)
            })
    };
    return (  
        <div className="p-3">
           <h2>Api Hook Forms</h2>
            <form className="p-3"  onSubmit={handleSubmit(viewData)}>
                <div className="mb-3 my-3">
                    <label className="form-label">Pokedex</label>
                    <input {...register("pokedex")} className="form-control w-25"></input>
                    <p className="text-danger">{errors.pokedex?.message}</p>
                </div>
                <button disabled={DisabledBtn} id="pokedex" type="submit" className="btn btn-primary my-3">Enviar</button>
            </form>
            <div className="row no-gutters">
                {
                   poke.map((item,index)=>(
                       <div className="col" key={index}>
                           <img height="150" src={item.sprites.front_shiny} ></img>
                           {item.name}
                       </div>
                   ))
                }
            </div>
        </div>  
    );
}
 
export default FormHook
