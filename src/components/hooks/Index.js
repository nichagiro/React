import axios from 'axios'
import React from 'react'

const Index = (props) => {

    React.useEffect(() => {
    }, [])

    const cambio = async () => {
        await props.setState({
            ...props.state,  // toda la tienda
            pokemons: {
                ...props.state.pokemons,
                pokemons: {
                    next: 'overweb.com.co'
                }
            }
        })
    }

    return (
        <div>
            {
                props.state.pokemons &&
                <h3>
                    {props.state.pokemons.pokemons.next}
                </h3>
            }
            <button className='btn btn-success' onClick={cambio}>URL</button>
        </div>
    )
}

export default Index

