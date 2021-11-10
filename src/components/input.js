import React, {Fragment} from "react";
import { Controller } from "react-hook-form";

const Input = ({control,name,error}) => {
    return (
        <Fragment>
            <Controller
            control={control}
            name={name}
            render={({ field }) => <input className="form-control w-50" {...field} onChange={(e) => field.onChange(e.target.value)} />}
            defaultValue=""
            />
            <p className="text-danger">{error}</p> 
        </Fragment>    
    );
}
 
export default Input;
