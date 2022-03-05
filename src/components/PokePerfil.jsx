import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import ky from 'ky';

const PokePerfil = () => {
    useEffect(() => {
      GetPokemons();
    }, [])
    
    const [Pokemon, setPokemon] = useState();
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const GetPokemons = () => {
        axios.get(api)
            .then(res => {
               setPokemon(res.data.results)
            })
            .catch( error => {
                    console.log('Desarrollador dice: ' + error );
                    alert("Ocurrio un error, no se pudo procesar los datos");
                }
            )
        
        // axios.get(api)
        // ky(api).json()
     
    }

    return (
        <div className="container">
            <ul className="py-5">
                {
                    Pokemon ? (
                        Pokemon.map((item,key) => (
                            <li key={key}>
                                <Link to={`/PokePerfil/${key + 1}`}>{item.name}</Link>
                            </li>
                        ))
                    ):(
                        <li>
                            No hay datos para mostrar...
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default PokePerfil
