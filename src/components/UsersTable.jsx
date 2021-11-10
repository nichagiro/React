import React from "react";

const UserTable = (props) => {
    return ( 
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Gestión</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.pokemons.length > 0 ? (
                            props.pokemons.map((pokemon, key)=>(
                                <tr key={key}>
                                    <th scope="row">{pokemon.name}</th>
                                    <td>
                                        <img className="img-fluid" src={pokemon.sprites.front_shiny} ></img>
                                    </td>
                                    <td className="d-flex justify-content-around">
                                        <button onClick={()=>{props.GetPokemon(pokemon)}} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-dark">Editar</button>
                                        <button onClick={()=>{props.DeleteUser(pokemon)}} className="btn btn-danger">Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        ) 
                        : (
                            <tr>
                                <th scope="row">No hay datos...</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
     );
}
export default UserTable;
