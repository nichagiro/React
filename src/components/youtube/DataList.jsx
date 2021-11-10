import React from 'react'

const DataList = (props) => {
    // se manda el video selecionado de la lista al component DetailList
    const GetYoutubeVideo = (video) => {
        props.ViewYoutubeVideo(video);
    }
    return (
        <div>
            <div className="card p-3 shadow">
                <small className="mb-3">Resultados:</small>
                <div className="border">
                    {
                        props.Videos  ? (
                            props.Videos.items.map(videos => (
                                <div onClick={()=>{GetYoutubeVideo(videos)}} key={videos.id['videoId']} className="hand d-flex justify-content-between border m-3 SearchYoutybe">
                                    <div className="p-3">
                                        <div>
                                            <b>Titulo: </b> <span id="title">{videos.snippet.title.substring(0,50)}...</span>
                                        </div>
                                        <div className="my-3">
                                            <b>Descripcion: </b> <span id="description">{videos.snippet.description.substring(0,80)}...</span>
                                        </div>
                                        <div>
                                            <b>Publicado: </b> <span id="date">{videos.snippet.publishedAt.substring(0,10)}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <img id="img" height="180px" src={videos.snippet.thumbnails.high.url}/>
                                    </div>
                                </div>
                            ))
                        ):(
                            <div className="p-4">
                                <b className="text-danger">
                                    no se ha realizado ninguna busqueda...
                                </b>
                            </div>
                        )
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default DataList
