import { createSlice } from '@reduxjs/toolkit'
import { AxiosGetResources } from '../../components/mui/utils/axios'



export const muiSlice = createSlice({
  name: 'mui',
  initialState: {
    posts: null,
    alert: {
      show: true,
      severity: 'error',
      title: 'TITULO',
      msg: 'Esta es una alerta de prueba',
    }
  },
  reducers: {
    getPosts: (state, action) => {
        return {...state, posts: action.payload}
    },
    setAlert:  (state, action) => {
      return {...state, alert: action.payload}
  },
  },
})

export const GetPosts = () => async (dispatch) => {
  const res = await AxiosGetResources();
  dispatch(getPosts(res))    
}

export const SetAlert = (data = null) => async (dispatch) => {
  if (data) {
    dispatch(setAlert(data))
  }
  else{
    dispatch(setAlert({
      show: false,
      severity: '',
      title: '',
      msg: null,
    }))
  }
 
}



// Action creators are generated for each case reducer function
export const { getPosts, setAlert} = muiSlice.actions
export default muiSlice.reducer