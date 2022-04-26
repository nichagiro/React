import Select from 'react-select';
import React from 'react'
import { GetNames, GetPhone } from 'faker-overweb';

const Index = (props) => {
    const [selectedOption, setSelectedOption] = React.useState(null);

    const options = [
        { value: '0', label: 'Todos' },
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

    const handleChange = (selectedOption) => {
        if (selectedOption.find(find => find.value == 0)) {
            setSelectedOption(options)
        }

        console.log(`Option selected:`, selectedOption)
    };


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
        console.log(GetNames())
        console.log(GetNames())
        console.log(GetNames())
        console.log(GetNames())
        console.log(GetPhone())
        console.log(GetPhone())
    }

    return (
        <div>
            <div className='m-5 w-25'>
                <Select
                    defaultValue={selectedOption}
                    onChange={handleChange}
                    options={options}
                    isMulti
                />
            </div>
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

