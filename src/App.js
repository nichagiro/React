import logo from './logo.svg';
import FormHook from './components/formHook';
import Form from './components/form';
// import PokApi from './components/api'
import SuperForm from './components/SuperForm';
import UserTable from './components/UsersTable';
import UserCrud from './components/UserCrud';
import React, {useState} from 'react';
import ModalUpdate from './components/ModalUpdate';

const App = () =>{ 
  const [Pokemon, setPokemon] = useState([]) //se almacenan los pokemons
  const [Modal, setModal] = useState(false) //poke individual
  const [PokeChange, setPokeChange] = useState()  //seleciona el pokemon al darle en editar

  // añande los pokemones con el boton anexar (component userCrud)
  const addPoke = (data) =>{
    setPokemon([
      ...Pokemon,
      data
    ])
  }

  // elimina el pokemon, el boton esta en UserTable
  const DeleteUser = pokemon  =>{
    const pokemons = Pokemon.filter(
      item => item.id != pokemon.id
    );
    setPokemon(pokemons);
  }

  // guarda en la variable el pokemon seleccionado y lo muestra en el modal, activandolo en true component UserTable 
  const GetPokemon = pokemon => {
    setPokeChange(pokemon);
    setModal(true);
  }

  // edita el pokemon con esta funcion, component modal ->  boton actualizar
  const editPoke = pokemon => {
    setPokemon(
      Pokemon.map( item => (
          item.id == pokemon.id ? pokemon : item
        )
      )
    )
    setModal(false);
  }
  return (
    <div>
      <Form/>
      {/* <FormHook /> */}
      {/* <PokApi /> */}
      {/* <SuperForm /> */}
      <div className="d-flex p-4 no-gutters">
        <div className="col-5 px-3">
          <UserCrud addPoke={addPoke}></UserCrud>
        </div>
        <div className="col-7 px-3">
          <UserTable GetPokemon={GetPokemon} pokemons={Pokemon} DeleteUser={DeleteUser}></UserTable>
        </div>
      </div>
      {
        Modal ? (
          <div>
            <ModalUpdate editPoke={editPoke} PokeChange={PokeChange}></ModalUpdate>
          </div>
        ):(
          <div></div>
        )
      }
    </div>
  );
}

export default App;
