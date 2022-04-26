import React from 'react'
import { useEffect } from 'react'
import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from '../store/StoreReducer';
import { ExecuteGetPost } from '../utils/url';
import ModalCatchAxios from './comunes/ModalCatchAxios';
import axios from 'axios';


const ListarBlog = () => {
    const dispatch = useDispatch()
    const state = useStore()

    useEffect(async () => {
        // await axios.get('https://pokeapi.co/api/v2/pokemoni/')
        // await axios.get('https://jsonplaceholder.typicode.com/postsi/')
        // await axios.get('https://api.aniapi.com/v1/useri/')
        await getPost();
    }, [])

    const getPost = async () => {
        await dispatch({
            type: types.FecthBlog,
            payload: await ExecuteGetPost()
        })

        await dispatch({
            type: types.DataCurrent        
        })
    }

    return (
        <div className='row gx-4 w-100'>
            <ModalCatchAxios />
            <ul className='col-6 scrolled overflow-auto p-5' style={{ height: '90vh' }}>
                {
                    state.blogs.length != 0 ? (
                        state.blogs.map(item =>
                            <li key={item.id}>
                                {item.title}
                            </li>
                        )
                    ) : (
                        <div>no hay datos...</div>
                    )
                }
            </ul>
        </div>
    )

}

export default ListarBlog