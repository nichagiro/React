import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'
import counterReducer from './features/counterSlice'
import pokemonsReducer from './features/pokemonSlice'
import postReducer  from './features/postSlice'
import compuReducer  from './features/compuSlice'


export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
    post: postReducer,
    computadores: compuReducer,
    form: formReducer
  },
})

