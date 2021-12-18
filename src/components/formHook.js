import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const FormHook = () => {
    const [people, setdata] = useState([
        {
            name:'Alvaro',
            phone:300555635,
            pass: '$bdyL63je08?'
        }
    ])
    const schema = yup.object({
        name: yup.string().required(),
        phone: yup.number().positive().required(),
      }).required();

    const { register, handleSubmit, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });

    const viewData = data => {
        setdata([
            ...people,
            data
        ]);
        reset();
    };
    return (  
        <div>
           <h2>Hooks Forms</h2>
            <form className="p-3"  onSubmit={handleSubmit(viewData)}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input {...register("name")} className="form-control w-25"></input>
                    <p className="text-danger">{errors.name?.message}</p>
                </div>
                <div className="mb-3 my-3">
                    <label className="form-label">Celular</label>
                    <input {...register("phone")} className="form-control w-25"></input>
                    <p className="text-danger">{errors.phone?.message}</p>
                </div>
                <button type="submit" className="btn btn-primary my-3">Enviar</button>
            </form>
            <ul>
                {
                   people.map((item,index)=>(
                       <li key={index}>
                           {item.name} -- {item.phone}
                       </li>
                   ))
                }
            </ul>
        </div>  
    );
}
 
export default FormHook