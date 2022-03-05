import StoreHeader from "./StoreHeader"


const types = {
    FecthBlog: 'FecthBlog',
    SetBlog: 'SetBlog',
}

const initialStore = {
    blogs: [],
    dataCurrent: new Date(),
}

const storeReducer = (state, action) => {
    switch(action.type) {
        case types.FecthBlog:
            return {
                ...state,
                blogs: action.payload.data
            }
        case types.SetBlog:
        return {
            ...state,
            blogs: []
        }            
        default:
            return state;
    } 
}

export { initialStore, types }
export default storeReducer