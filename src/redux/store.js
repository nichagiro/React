import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import pokemonsReducer from './features/pokemonSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokemons: pokemonsReducer,
  },
})

