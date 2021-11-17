import React from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { SelectPokemon, AddFavorite } from '../../redux/features/pokemonSlice'
import { Link } from 'react-router-dom'

const DetailPoke = () => {

    const {name} = useParams()
    const api = 'https://pokeapi.co/api/v2/pokemon/'.concat(name)

    const dispatch = useDispatch()
    const pokemon = useSelector(state => state.pokemons.getPoke)
    const verifyFavorite = useSelector(state => state.pokemons.pokeFavorite)
    
    React.useEffect(() => {
        dispatch(SelectPokemon(api));
    }, [])

    return (
        <div className="container p-5">
            <div className="d-flex mb-4">
                <button disabled={verifyFavorite} onClick={() => {dispatch(AddFavorite(pokemon))}} className="btn btn-success mx-3">Añadir a favoritos</button>
            </div>
            {
                pokemon ? (
                    <div className="card shadow-lg w-25 mx-auto">
                        <img src={pokemon.sprites.front_default} className="card-img-top"/>
                        <div className="card-body text-center">
                            <h5 className="card-title">{pokemon.name}</h5>
                            {
                                pokemon.types.map((item, key) => (
                                    <p key={key} className="card-text">{item.type.name}</p>    
                                ))
                            }
                            <Link to="/Redux" className="btn btn-primary">Atras</Link>
                        </div>
                    </div>
                ):(
                    <div> no hay datos...</div>
                )
            }
        </div>
    )
}

export default DetailPoke
