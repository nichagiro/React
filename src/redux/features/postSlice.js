import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {Error, Success} from '../../Swal'

const API = process.env.REACT_APP_API_POST ;

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    listPost: null,
    postSelect:null,
    btnDelete: true, //disabled (ListPost component)
    search: null, //buscador
  },
  reducers: {
    getPost: (state, action) => {
        return {...state, listPost: action.payload}
    },
    selectPost: (state, action) => {
      return {...state, postSelect: action.payload, btnDelete:false}
    },
    unselectPost: (state) => {
      return {...state, postSelect:null, btnDelete:true}
    },
    updatePost: (state, action) => {
      return {...state, postSelect:null, listPost: action.payload, btnDelete:true}
    },
    deletePost: (state, action) => {
      return {...state, postSelect:null, listPost: action.payload, btnDelete:true}
    },
    addPost: (state, action) => {
      return {
        ...state, 
        listPost: [
          ...state.listPost,
          action.payload
        ]
      }
    }
  },
})

export const GetPost = () => async (dispatch) => {
  try {

    const res = await axios.get(API);
    dispatch(getPost(res.data))
    
  } catch (error) {
      
      console.log(error);
      Error('Ocurrio un error', 'no se pudo traer los post');
  }

}

export const CreatePost = (data) => async (dispatch) => {

  const post = {
    title: data.title,
    body: data.body,
    userId: 1000
  }

  try {
    const res = await axios.post(API, post)
    dispatch(addPost(res.data))
    Success()
    
  } catch (error) {
    Error()
  }
  
}


export const SelectedPost = (data) => async (dispatch) => {

  dispatch(selectPost(data));

}


export const UnselectedPost = (data) => async (dispatch) => {

  dispatch(unselectPost(data));

}

export const DeletePost = () => async (dispatch, getSate) => {

  const {postSelect} = getSate().post;
  const {listPost} = getSate().post;

  try {

    const res = axios.delete(API.concat(postSelect.id))

    const filter = listPost.filter( item => {
       return item.id != postSelect.id
    })

    dispatch(deletePost(filter))

    Success("Eliminado", "Se ha elimiado con exito")
    
  } catch (error) {
    
    console.log(error)
    Error('No se pudo eliminar', 'intentelo mas rato')
  }

}

export const UpdatePost = (data) => async (dispatch, getSate) => {

  const {postSelect} = getSate().post;
  const {listPost} = getSate().post;


  const post = {
    title: data.title,
    body: data.body,
    userId: postSelect.userId
}
 
  try {

    const res = await axios.put(API.concat(postSelect.id) , post);

    const filter = listPost.map( item => (
      item.id == res.data.id ? res.data : item
      ))
      
    dispatch(updatePost(filter))

    Success('Actualizado', res.data.title + ', gestionado !')

  } catch (error) {
    Error();
    console.log(error)
  }

}

export const { getPost, addPost, updatePost, selectPost, unselectPost, deletePost } = postSlice.actions

export default postSlice.reducer