const types = {
    SetPermisos : 'SetPermisos',
    ErrorAxios : 'ErrorAxios'
}

const store = {
    permisos: {
        admin: false
    },
    errors: false
}

const StoreHeader = (state, action) => {
    switch (action.type) {
        case types.SetPermisos:
            return {
                ...state,
                permisos: action.payload
            }
        case types.ErrorAxios:
            return {
                ...state,
                errors: action.payload
            }
        default:
            return state;
    }
}

export { store, types }
export default StoreHeader