import React, { useContext } from 'react'
import Poke from '../Poke'
import Indexin from '../Index'
import { StoreContext } from '../Store'
import { FetchPokemons, FetchUser } from './Actions'
import ModalCatchAxios from '../../context/components/comunes/ModalCatchAxios'

const Index = () => {
    const [pokeList, setpokeList] = React.useState(['NICOLAS ', 'charizard', 'dragonite', 'cartepie', 'machamp', 'lapras'])
    const [state, setState] = useContext(StoreContext)

    // React.useEffect(async () => {
    //     await FetchPokemons(state, setState, pokeList)
    //     await FetchUser(state, setState)
    // }, [])

    return (
        <div>
            <ModalCatchAxios />
            <Poke state={state} setState={setState} />
            <Indexin state={state} setState={setState} />
        </div>
    )
}

export default Index