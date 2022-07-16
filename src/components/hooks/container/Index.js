import React, { useEffect } from 'react'

import ModalCatchAxios from '../../context/components/comunes/ModalCatchAxios'
import { FetchPokemons } from '../Actions/Actions'

const Index = () => {

    useEffect(() => {
        HandleFirst()
    }, [])
    
    const HandleFirst = async () => {
        console.log((await FetchPokemons()).data)
    }

    return (
        <div>
            <ModalCatchAxios />
            
        </div>
    )
}

export default Index