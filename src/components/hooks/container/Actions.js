import { GetPokemons } from "../utils/Axios"

export const FetchPokemons = async (state, setState, data) => {
    await setState({
        ...state,
        permisos: { admin: true },
        pokemons: {
            pokemons: (await GetPokemons()).data,
            pokeList: data
        }
    })
}

export const FetchUser = async (state, setState) => {
    await setState({
        ...state,
        permisos: { 
            ...state.permisos,
            admin: false,
            dev: true,
            name: 'Nicolas Chamorro' ,
            user: 'NC2506'
        },
    })
}