import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import Swal from 'sweetalert2'

const api = 'https://pokeapi.co/api/v2/pokemon/';

 export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    listPoke: null,
    getPoke: null,
    favorites: [],
    pokeFavorite:false,
  },
  reducers: {
    getPokemons: (state, action) => {
      return {...state, listPoke: action.payload}
    },
    selectPoke: (state, action) => {
      return {...state, getPoke: action.payload}
    },
    addFavorite: (state, action) => {
      return {
        ...state, 
        favorites: [
            ...state.favorites, action.payload
        ]
      }
    },
    VerifyFavorite: (state, action) => {
      return {...state, pokeFavorite: action.payload}
    },
    deleteFavorite: (state, action) => {
      return {...state, favorites: action.payload}
    },
    changeSpriteImg: (state, action) => {
      return {...state, favorites: action.payload}
    },
  },
})

// trae el listado de pokemon
export const ObtenerPokemons = (paginate = null) => async (dispatch) => {
  try {
    if(paginate){
      const res = await axios.get(paginate)
      dispatch(getPokemons(res.data))
    }
    else{
      const res = await axios.get(api)
      dispatch(getPokemons(res.data))
    }
    
  } catch (error) {
    alert('ocurrio un error')
    console.log(error)
    }
}

// Selecciona el pokemon (individual)
export const SelectPokemon = (url) => async (dispatch) => {
    try {
      var res = await axios.get(url)
      dispatch(selectPoke(res.data))
      
    } catch (error) {
      alert('ocurio un error')
      console.log(error)
    }
    // comprueba si el pokemon ya esta en favoritos
    dispatch(VerifyPokeFavorite(res.data));
}

// añade el pokemon a favoritos
export const AddFavorite = (pokemon) => (dispatch) => {
  dispatch(addFavorite(pokemon));
  dispatch(VerifyPokeFavorite(pokemon));   // deshabilita el btn add favoritos
}

// elimina el pokemon de favoritos
export const DropFavorite = (pokemon) => (dispatch, getState) => {
  
  Swal.fire({
    title: 'Deseas eliminar a '.concat(pokemon.name),
    text: "Esta accion lo eliminara de los favoritos",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {     
      const {favorites} = getState().pokemons

      const filtro = favorites.filter(item => {
        return item.name != pokemon.name
      })

      try {
        dispatch(deleteFavorite(filtro));
        Swal.fire(
          'Eliminado!',
          'Se ha eliminado con exito.',
          'success',
        )
    
      } catch (error) {
        Swal.fire(
                'Ocurrio un error!',
                'No se pudo eliminar el registro.',
                'error',
              )
        console.log(error);
      }
    
    }
  })


}

 // comprueba si el pokemon ya esta en favoritos
export const VerifyPokeFavorite = (data) => async (dispatch, getState) => {
  const pokemon = data;
  const {favorites} = getState().pokemons

  const validate = favorites.find( item => {
    return item.name == pokemon.name ? true : false
  })

  dispatch(VerifyFavorite(validate))
}

 // cambia a shiny con solo un click en el pokemon
 export const ChangeImagePokemon = (data) => async (dispatch, getState) => {

  let front_default ;
  let alternate;

  // juega verificando sies shyni o no para cambiarlo en el cliente
  if(data.sprites.front_shiny) {
    front_default = data.sprites.front_shiny;
    alternate = data.sprites.front_default;
  }
  else{
    front_default = data.sprites.alternate;
    alternate = data.sprites.front_default;
  }

  // modifica la estructura del objeto
  const pokemon =  {
    name:data.name,
    sprites:{
      front_default: front_default,
      alternate: alternate 
    }
  };
  const {favorites} = getState().pokemons;

  const getPokemons = favorites.map( item => {
    return item.name == pokemon.name ? pokemon : item;
  })

  dispatch(changeSpriteImg(getPokemons))
}



// Action creators are generated for each case reducer function
export const { 
  getPokemons, selectPoke, addFavorite, favorites, VerifyFavorite, deleteFavorite, changeSpriteImg 
} = pokemonsSlice.actions

export default pokemonsSlice.reducer
