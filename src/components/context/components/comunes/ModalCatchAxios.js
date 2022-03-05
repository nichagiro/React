import axios from 'axios';
import React, {useState} from 'react'
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { types } from '../../store/StoreHeader';

const ModalCatchAxios = () => {

    const [error, setError] = useState(false)

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        HandleSetError(error)
        return Promise.reject(error);
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
        
        setError({
            status: error.response.status,
            text: message
        })
        
    }

    useEffect(() => {
        if (error) {
            RenderAlert()
        }
    }, [error])


    const RenderAlert = async () => {
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
            setError(false)
        })
    }


    return (
        <div>

        </div>
    )
}

export default ModalCatchAxios