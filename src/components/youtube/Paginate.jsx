import React from 'react'

const Paginate = (props) => {
    return (
        <div>
            <nav aria-label="YoutubePagination" className="d-flex justify-content-center">
                <ul className="pagination pagination-sm">
                    <li aria-current="page">
                        <button onClick={() => {props.BackPagination()}} className="btn btn-danger">Atras</button>
                    </li>
                    <li className="mx-3">
                        <button onClick={() => {props.NextPagination()}} className="btn btn-danger">Siguiente</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Paginate
