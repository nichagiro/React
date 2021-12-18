import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector, useDispatch } from 'react-redux';
import { GetPosts } from '../../../redux/features/muiSlice';

const ListBlog = () => {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.mui.posts)

    const columns = [
        { field: 'id', headerName: 'ID', width: 100, },
        { field: 'title', headerName: 'TITULO', width: 100,},
        { field: 'body', headerName: 'CUERPO', width: 100 },
        { field: 'userId', headerName: 'USUARIO', width: 100 },
    ];

    React.useEffect(() => {
        dispatch(GetPosts());
    }, [])

  

    return (
        <>
            <div style={{ height: 500, width: '100%' }}>     
                <DataGrid
                    rows={posts}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />   
            </div>
        </>
    )
}

export default ListBlog
