import React from 'react'
import { Link } from 'react-router-dom'
import ListPoke from './ListPoke'

const Pokemon = () => {

  return (
    <div>
      <Link to="/favorites" className="btn btn-primary mt-3 mx-4">Pokemones favoritos</Link>
      <ListPoke></ListPoke>
    </div>
    
  )
}

export default Pokemon
