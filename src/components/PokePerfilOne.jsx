import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router'
import PokeCard from './PokeCard';

const PokePerfilOne = () => {
    const {id} = useParams();
    const api = 'https://pokeapi.co/api/v2/pokemon/';
    const [Pokemon, setPokemon] = React.useState()

    React.useEffect(() => {
        GetPoke();
    }, [])

    const GetPoke = () => {
        axios.get(api + id)
            .then( res => {
                setPokemon(res.data)
            })
            .catch( error => {
                alert("Error, no se pudo traer los datos")
                console.log('desarrollador: ' + error )
            })
    }

    return (
        <div className="container">
            {
                Pokemon ? (
                    <PokeCard Pokemon={Pokemon}></PokeCard>
                ):(
                    <h1 className="mt-5 text-center">...Cargando</h1>
                )
            }
        </div>
    )
}

export default PokePerfilOne
