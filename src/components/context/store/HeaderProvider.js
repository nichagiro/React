import { createContext, useContext, useReducer } from 'react'
import StoreHeader, { store } from './StoreHeader';


const HeaderContext = createContext();

const HeaderProvider = ({ children }) =>
    <HeaderContext.Provider value={useReducer(StoreHeader, store)} >
        {children}
    </HeaderContext.Provider>


const HeaderStore = () => useContext(HeaderContext)[0]
const HeaderDispatch = () => useContext(HeaderContext)[1]


export { HeaderContext, HeaderStore, HeaderDispatch }
export default HeaderProvider;


