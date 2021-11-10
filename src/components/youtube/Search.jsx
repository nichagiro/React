import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Search = (props) => {
    const schema = yup.object({
        search: yup.string().required().min(3)
    }).required();

    const { register, handleSubmit, reset,formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
    });

    // se manda los datos a la funcion del componente Youtube
    const SearchVideo = data => {
        document.getElementById('btn_search').setAttribute('disabled', true);
        props.FilterVideo(data);
        reset();
        document.getElementById('btn_search').removeAttribute('disabled');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(SearchVideo)}>
                <div className="d-flex justify-content-start w-75">
                    <input  {...register("search")} className="form-control w-75" type="search" />
                     <button id="btn_search" className="btn-danger btn mx-3" type="submit">Buscar</button>   
                </div>
                {errors.search && <p  className="text-danger">{errors.search.message}</p>}
            </form>
        </div>
    )
}

export default Search
