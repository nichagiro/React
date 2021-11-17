import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {DropFavorite,ChangeImagePokemon} from '../../redux/features/pokemonSlice'

const Favorites = () => {
    
  const favorites = useSelector(state => state.pokemons.favorites)
  const dispatch = useDispatch();

  const dropPokemon = (pokemon) => {    
    dispatch(DropFavorite(pokemon));  
  }

  const changeImg = (pokemon) => {    
    dispatch(ChangeImagePokemon(pokemon));
  }
  
    return (
        <div>
            <div className=" my-5 container d-flex  flex-wrap">
                {
                    favorites.length > 0 ? (
                        favorites.map( item => (
                            <div key={item.name}>
                                <div className="card shadow mx-2" onClick={() => {changeImg(item)}}>
                                    <div className="p2 bg-dark rounded-full">
                                        <img src={item.sprites.front_default}/>
                                    </div>
                                    <p className="text-center text-success fw-bold mt-2">{item.name}</p>
                                </div>
                                <div className="text-center mt-2 mb-5">
                                    <button onClick={()=>{dropPokemon(item)}} className="btn btn-danger">Eliminar</button>
                                </div>
                            </div>
                        ))
                    ):(
                        <b>No hay favoritos</b>
                    )
                }
            </div>
        </div>
    )
}

export default Favorites
