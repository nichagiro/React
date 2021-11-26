import React from 'react'
import { GetPost, SelectedPost, DeletePost } from '../../redux/features/postSlice'
import { useSelector, useDispatch } from 'react-redux'

const ListPost = () => {

    const dispatch = useDispatch();
    const post = useSelector(state => state.post.listPost);
    const btnDelete =  useSelector(state => state.post.btnDelete); // disabled 

    React.useEffect(() => {
        dispatch(GetPost());
    }, [])

 
    return (
        <div className="col-5">
            <div className="d-flex flex-wrap">
                <button onClick={()=>{dispatch(DeletePost())}} disabled={btnDelete} type="button" className="btn btn-danger">Eliminar</button>
            </div>
            {
                post ? (
                    <div className="table-responsive my-5">
                        <table className="table align-middle table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">UserId</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    post.map( (item, key) => (
                                        <tr key={key} onClick={()=>{dispatch(SelectedPost(item))}}>
                                            <th scope="row">{key+1}</th>
                                            <th scope="row">{item.userId}</th>
                                            <td>{item.title}</td>
                                            <td>{item.body}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <b>no hay datos...</b>
                )
            }
            
        </div>
    )
}

export default ListPost
