import React, { Fragment } from "react";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';


const Input = () => {
    const methods = useFormContext();

    return (
        <>
            <input {...methods.register('nada')} className="form-control w-25" />
            <ErrorMessage errors={methods.errors} name="nada" as='error' />
        </>
    )
}

export default Input;
