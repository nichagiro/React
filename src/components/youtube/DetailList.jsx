import React from 'react'
import Paginate from './Paginate'

const DetailList = (props) => {
    return (
        <div className="sticky-top">
            <div className="card shadow">
                {
                    props.ViewVideo ? (
                        <div>
                             <img height="300px" src={props.ViewVideo.snippet['thumbnails']['high']['url']}/>
                            <div className="container py-3">
                                <div>
                                    <b>Titulo: </b> <span>{props.ViewVideo.snippet['title']}</span>
                                </div>
                                <div className="my-3">
                                    <b>Descripcion: </b> <span>{props.ViewVideo.snippet['description']}</span>
                                </div>
                                <div>
                                    <b>Publicado: </b> <span>{props.ViewVideo.snippet['publishedAt'].substring(0,10)}</span>
                                </div>
                            </div>
                        </div>
                    ):(
                        <div>
                            <img height="300px" src="https://us.123rf.com/450wm/thomaspajot/thomaspajot1401/thomaspajot140100001/24887723-bot%C3%B3n-reproducir.jpg?ver=6"/>
                        </div>
                    )
                }
            </div>
            <br />
            {/* estas funciones las envia el componente Youtube y este los recibe aca para renviarlo no mas */}
            <Paginate  BackPagination={props.BackPagination} NextPagination={props.NextPagination}></Paginate>
        </div>
    )
}

export default DetailList
