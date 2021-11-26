import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import pokemonsReducer from './features/pokemonSlice'
import postReducer  from './features/postSlice'
import { reducer as formReducer } from 'redux-form'


export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
    post: postReducer,
    form: formReducer
  },
})

