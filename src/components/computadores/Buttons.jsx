import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {destroyCompu} from './../../redux/features/compuSlice'

const Buttons = () => {
    const selectCompu = useSelector(state => state.computadores.selectCompu);
    const dispatch = useDispatch();

    return (
        <div>
             <div className="d-flex mb-4">
                <Link to="/computadores/crear" className="btn btn-primary">Crear</Link>
                <Link to={selectCompu.length == 1 ? "/computadores/crear" : "/computadores/"} className="btn btn-dark mx-3">Editar</Link>
                <button onClick={()=>{dispatch(destroyCompu())}} disabled={selectCompu.length > 0 ? false : true} className="btn btn-danger">Eliminar</button>
            </div>
        </div>
    )
}

export default Buttons
