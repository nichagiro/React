import React, { useState } from 'react';

const Form = () => {
   
    const [data, setdata] = useState()

    const changeForm = (e) => {
        setdata({
            ...data, 
            [e.target.name] : e.target.value,
            [e.target.phone] : e.target.value
        });
    }
 
    const viewData = (e) => {
        e.preventDefault();
        alert(data.name+' '+data.phone);
    }
    return ( 
        <div>
            <form className="p-3" onSubmit={viewData}>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input onChange={changeForm} name="name" type="text" className="form-control w-25"></input>
                </div>
                <div className="mb-3 my-3">
                    <label className="form-label">Celualr</label>
                    <input onChange={changeForm} name="phone" type="number" className="form-control w-25"></input>
                </div>
                <button type="submit" className="btn btn-primary my-3">Enviar</button>
            </form>
        </div>  
    );
}
 
export default Form;

