import axios from 'axios'
import { fetchPoke } from '../config/urls'

export const GetPokemons = async () => {
    return await axios.get(fetchPoke)
}