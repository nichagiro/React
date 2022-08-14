import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useDispatch, useStore } from '../../store/StoreProvider';
import { types } from '../../store/StoreReducer';

const ModalCatchAxios = () => {

    const state = useStore();
    const dispatch = useDispatch();

    axios.interceptors.response.use(function (response) {
        return response;
    }, async function (error) {
        HandleSetError(error)
        return console.log(error)
        // return Promise.reject(error);
    });

    const HandleSetError = error => {
        let message = 'no hay informacion para mostrar.'
        if (error.response.data.message && error.response.data.message != "") {
            message = error.response.data.message;
        } else {
            if (error.response.statusText && error.response.statusText != "") {
                message = error.response.statusText
            }
        }

        dispatch({
            type: types.catch,
            payload: {
                status: error.response.status,
                text: message
            }
        })
    }

    useEffect(() => {
        if (state.catch) {
            RenderAlert()
        }
    }, [state.catch])


    const RenderAlert = async () => {
        const error = state.catch;
        Swal.fire({
            title: 'Error ' + error.status,
            text: "Puede consular en ver mas que fue lo que paso",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ver mas'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Informacion Adicional!',
                    error.text,
                    'info'
                )
            }
            dispatch({
                type: types.catch,
                payload: false
            })
        })
    }


    return (
        <div>
        </div>
    )
}

export default ModalCatchAxios