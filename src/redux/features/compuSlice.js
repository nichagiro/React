import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Error, Success, SuccessRedirect } from '../../Swal';

const API = process.env.REACT_APP_API_COMPU;

 export const compuSlice = createSlice({
  name: 'computadores',
  initialState: {
    listCompu: null,
    selectCompu: [],
  },
  reducers: {
    getCompu: (state, action) => {
      return {...state, listCompu: action.payload}
    },
    compuSelect: (state, action) => {
        return {...state, selectCompu:[ 
            ...state.selectCompu,
            action.payload]}
      },
    compuUnselect: (state, action) => {
    return {...state, selectCompu:action.payload}
    },

  },
})

export const GetCompu = (search) => async (dispatch) => {
    try {
        if (search) {
            const res = await axios.get(API, {
                params: {
                    paginate: true,
                    numPaginate: 12,
                    search: search
                }
            });
            dispatch(getCompu(res.data));
        }
        else{
            const res = await axios.get(API, {
                params: {
                    paginate: true,
                    numPaginate: 12
                }
            });
            dispatch(getCompu(res.data));
            dispatch(compuUnselect([]));
        }
        
    } catch (error) {
        Error();
        console.log(error);
    }

}

export const UpdateCompu = (data) => async () => {
    try {
        const res = await axios.put(API, data);
        SuccessRedirect('Actualizado','http://localhost:3000/computadores/');
    
    } catch (error) {
        Error();
        console.log(error);
    }

}

export const CreateCompu = (data) => async () => {
    try {
        const res = await axios.post(API, data);
        Success(res.data.marca +' creado', 'se ha creado el computador con exito');
        
    } catch (error) {
        Error();
        console.log(error);
    }

}

export const SelectCompu = (data, check) => async (dispatch, getState) => {

    if (check) {
        dispatch(compuSelect(data));
    }
    else {
        const {selectCompu} = getState().computadores;
        const filter = selectCompu.filter( item => {
            return item.id !=  data.id;
        })
        dispatch(compuUnselect(filter));
    }
}

export const destroyCompu = () => async (dispatch, getState) => {
    const {selectCompu} = getState().computadores;

        try {
            await axios.delete(API, {data:selectCompu});
            dispatch(GetCompu());
            Success('ELiminado','Elementos seleccionados quedaron eliminados');
            dispatch(compuUnselect([]));

        } catch (error) {
            console.log(error);
        }
        
}

export const { getCompu, compuSelect, compuUnselect } = compuSlice.actions

export default compuSlice.reducer
