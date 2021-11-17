import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ObtenerPokemons } from '../../redux/features/pokemonSlice'

const ListPoke = () => {

  const pokemons = useSelector((state) => state.pokemons.listPoke)
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(ObtenerPokemons())
  }, [])

  return (
    <div className="container">
      {
        pokemons ? (
          <div>
            <div className="flex my-4">
              <button disabled={pokemons.previous ? false : true} onClick={() => {dispatch(ObtenerPokemons(pokemons.previous))}} className="btn btn-dark mx-2">Atras</button>
              <button disabled={pokemons.next ? false : true} onClick={() => {dispatch(ObtenerPokemons(pokemons.next))}} className="btn btn-dark">Siguiente</button>
            </div>
            <div className="row justify-content-center my-3">
              {
                pokemons.results.map(item => (
                  <div key={item.name} className="card shadow col-3 m-1">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                        <Link to={`/detailpoke/${item.name}`}>{item.url}</Link>
                    </div>
                  </div>
                ))
              }
            </div>  
          </div>  

        ):(
          <b>no hay datos...</b>
        )
      }
    </div>
  )
}

export default ListPoke
