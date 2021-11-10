import React, { useState } from "react";
import { useForm,useController } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Input from "./input";
// import Error from "./error";

const SuperForm = () => {
    const [Name, setName] = useState([])

    const schema = yup.object({
        name: yup.string().required(),
      }).required();

    const {control, handleSubmit, reset, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });

    const sendData = (data) => {
        setName([
            ...Name,
            data
        ]);
        reset();
    }

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(sendData)}>  
                <label> Name</label>
                <Input error={errors.name?.message} name="name" control={control}/>
                <button className="btn-danger btn mt-3" typ="submit"> Enviar </button>
            </form>
        </div>
      );
}
 
export default SuperForm;