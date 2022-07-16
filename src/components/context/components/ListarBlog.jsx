import React from 'react'
import { useEffect } from 'react'
import { useStore, useDispatch } from "../store/StoreProvider";
import { types } from '../store/StoreReducer';
import { ExecuteGetPost } from '../utils/url';
import axios from 'axios';
import MyComponent from './MyComponent';


const ListarBlog = () => {
    const dispatch = useDispatch()
    const state = useStore()

    useEffect( async () => {
        setTimeout(() => {
            getPost();        
        }, 2000);
    }, [])

    const getPost = async () => {
        const response =  await ExecuteGetPost()
        await dispatch({
            type: types.FecthBlog,
            payload: response.data || []
        })

        await dispatch({
            type: types.DataCurrent        
        })
    }

    return (
        <div className='row gx-4 w-100'>    
        <button className='btn-danger' onClick={()=> getPost()}>EXPLOTAR</button>       
            <MyComponent/>
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