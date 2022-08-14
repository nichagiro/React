import axios from 'axios'
import React from 'react'
import ModalCatchAxios from './context/components/comunes/ModalCatchAxios'
import Lista from './Lista'

class pruebas extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            datos: [],
            currenDate: new Date(),
            admin: true
        }
    }

    async componentDidMount() {
        this.API()
    }

    API = async () => {
        const info = await axios.get('https://rickandmortyapi.com/api/character')
        this.setState({
            datos: info ? info.data.results : []
        })
    }

    render() {
        return (
            <div>
                <Lista {...this.state} />
                <ModalCatchAxios />
            </div>
        )
    }
}

export default pruebas
