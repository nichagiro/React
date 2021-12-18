import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {SelectCompu, GetCompu} from './../../redux/features/compuSlice'

const ListCompu = () => {
    const compu = useSelector(state => state.computadores.listCompu);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(GetCompu());
    }, [])

    const ListaCompu = compu ? 
        <div className="table-responsive">
            <table className="table table-bordered border-primary table-hover">
                <thead>
                    <tr>
                        <th scope="col">Acción</th>
                        <th scope="col">#</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Procesador</th>
                        <th scope="col">Ram</th>
                        <th scope="col">Tarjeta Grafica</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        compu.data.map( (item, key )=> (
                            <tr id={"th".concat(item.id)} key={item.id}>
                                <th>
                                    <input onClick={()=>{SelectedItem(item)}}  type="checkbox" name="check" id={"check".concat(item.id)} />
                                </th>
                                <th scope="row">{key + 1}</th>
                                <td>{item.marca}</td>
                                <td>{item.procesador}</td>
                                <td>{item.ram}</td>
                                <td>{item.tarjeta_grafica}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    :
        <b>no hay datos para mostrar...</b>

    const SelectedItem = (data) => {
        const input = document.getElementById("check".concat(data.id));
        const th = document.getElementById("th".concat(data.id));

        if(input.checked){
            dispatch(SelectCompu(data, true));
            th.className = 'bg-info';
        }
        else{
            dispatch(SelectCompu(data, false));
            th.className = '';
        }
    }

    return (
        <div>
            {ListaCompu}  
        </div>
    )
}

export default ListCompu
