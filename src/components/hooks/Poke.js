import React, { useContext, useState } from 'react'
import {StoreContext} from './Store'

const Poke = (props) => {

    const [pokeList, setpokeList] = useState(['Articuno', 'Zapdos', 'Moltres', 'New', 'Newto', 'Aerodactyl'])
    
    const ChangePokeList = () => {
        props.setState({
            ...props.state,
            pokemons : {
                ...props.state.pokemons,
                pokeList
            }
        })
    }

    return (
        <div>
          <ul>
              {
                  props.state.pokemons &&
                    <li>
                        {props.state.pokemons.pokeList}
                    </li>
              }
          </ul>
          <button className='btn btn-danger' onClick={ChangePokeList}>INDEX</button>
        </div>
    )
}

export default Poke