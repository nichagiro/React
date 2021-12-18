import React from 'react'
import { useDispatch } from 'react-redux'
import {GetCompu, prueba} from './../../redux/features/compuSlice'

const Search = () => {
    const dispatch = useDispatch();

    const GetComputadores = (e) => {
        dispatch(GetCompu(e.target.value))
    }

    return (
        <div>
            <input onChange={GetComputadores} 
            type="search"
            name="search"
            className="form-control mx-5"
            placeholder="Search..." />
        </div>
    )
}

export default Search
