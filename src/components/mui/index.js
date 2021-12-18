import React from 'react'
import ListBlog from './containers/ListBlog'
import Scrips from './config/scrips'
import { useSelector, useDispatch } from 'react-redux'
import { Alert, AlertTitle} from '@mui/material';
import { SetAlert } from '../../redux/features/muiSlice';


const Index = () => {
    const alert = useSelector(state => state.mui.alert)    
    const dispatch = useDispatch();

    const alerta = alert.show &&
    <Alert 
        onClose={()=>dispatch(SetAlert())} 
        severity={alert.severity}  
        sx={{ zIndex: 'modal', right: '0px', top: '30px', position: 'fixed', boxShadow:6, mx: 5 }}
    >
        <AlertTitle>{alert.title}</AlertTitle>
        <strong>{alert.msg}</strong>
    </Alert> 

    return (
        <div>
            {/* {alerta} */}
            {Scrips}
            <ListBlog></ListBlog>
        </div>
    )
}

export default Index
