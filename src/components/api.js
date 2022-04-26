import React, { useState } from "react";
import { useForm,  FormProvider, useFormContext } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import { GetValues } from "../actions";
import Input from "./input";
import { DevTool } from "@hookform/devtools";
import { ErrorMessage } from '@hookform/error-message';
import { setLocale } from 'yup';


const FormHook = () => {
    // setLocale('es')
    // setLocale({
    //     mixed: {
    //       default: 'Não é válido',
    //     },
    //     number: {
    //       required: 'marica debe de ser un numero',
    //       min: 'gay mayor a ' 
    //     },
    //   });
    const [poke, setpoke] = useState([])
    const [DisabledBtn, setDisabledBtn] = useState(false)

    const url = 'https://pokeapi.co/api/v2/pokemon/';

    const schema = yup.object({
        pokedex: yup.number().positive('jaja').nullable().max(898).min(50) .typeError('el campo debe de ser numerico'),
        pokedexi: yup.number().positive().required('Requerido').max(898),
        nada: yup.string().required('campo requerido').max(2),
    }).required();
 
    const methods = useForm({
        resolver: yupResolver(schema),
        shouldUnregister: true,
        shouldUseNativeValidation:false
    });


    const viewData = (data) => {
        setDisabledBtn(true)
        const api = url + data.pokedex;
        axios.get(api)
            .then(res => {
                const data = res.data;
                setpoke([
                    ...poke,
                    data
                ])
                methods.reset();
                setDisabledBtn(false)

            })
            .catch(error => {
                setDisabledBtn(false)
                console.log(error)
            })
    };

    const log = data => console.log(methods.getValues());

    return (
        <div className="p-3">
            <h2>Api Hook Forms</h2>
            <FormProvider {...methods} >
                <form name="1"  onSubmit={methods.handleSubmit(viewData, log)} className="p-3">
                    <div className="mb-3 my-3">
                        <label className="form-label">Pokedex</label>
                        <input {...methods.register("pokedex")} className="form-control w-25"></input>
                        <ErrorMessage errors={methods.errors} name="pokedex" as='error' />
                    </div>
                    <div className="mb-3 my-3">
                        <label className="form-label">NO HACE NADA (mismas validacioens)</label>
                        <Input/>
                    </div>
                    <button disabled={DisabledBtn} id="pokedex" type="submit" className="btn btn-primary my-3">Enviar</button>
                </form>
                <form  onSubmit={methods.handleSubmit( (data) => log(data))} name="2"className="p-3">
                    <div className="mb-3 my-3">
                        <label className="form-label">Pokedex</label>
                        <input {...methods.register("pokedexi")} className="form-control w-25"></input>
                        <ErrorMessage errors={methods.errors} name="pokedexi" as='error' />
                    </div>                    
                    <button disabled={DisabledBtn} id="pokedex" type="submit" className="btn btn-primary my-3">Enviar</button>
                </form>
                <div className="row no-gutters">
                    {
                        poke.map((item, index) => (
                            <div className="col" key={index}>
                                <img height="150" src={item.sprites.front_shiny} ></img>
                                {item.name}
                            </div>
                        ))
                    }
                </div>
                <button className="btn btn-danger" onClick={() => log()}>metodos form provider</button>
                <DevTool control={methods.control} />
            </FormProvider>
        </div>
    );
}

export default FormHook
