const types = {
    FecthBlog: 'FecthBlog',
    SetBlog: 'SetBlog',
    DataCurrent: 'DataCurrent',
    catch: 'catch'
}

const initialStore = {
    blogs: [],
    dataCurrent: new Date(),
    catch: false
}

const storeReducer = (state, action) => {
    switch (action.type) {
        case types.catch:
            return {
                ...state,
                catch: action.payload
            }
        case types.FecthBlog:
            return {
                ...state,
                blogs: action.payload
            }
        case types.SetBlog:
            return {
                ...state,
                blogs: []
            }
        case types.DataCurrent:
            return {
                ...state,
                dataCurrent: 'nicolas fecha'
            }
        default:
            return state;
    }
}

export { initialStore, types }
export default storeReducer