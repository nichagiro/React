import React, {useState,useEffect, Component} from 'react';
import DataList from './DataList';
import Search from './Search';
import DetailList from './DetailList';
import axios from 'axios';
import style from './style.css'

const Youtube = () => {
    const api = 'https://www.googleapis.com/youtube/v3/search';
    const KEY = 'AIzaSyCbxyyOBaqKUNhMVk59RJHVRgGraJYa9PQ';
    const [Videos, setVideos] = useState(); //videos de la consutla del user
    const [ViewVideo, setViewVideo] = useState(); // video que selecciona el usuario
    const [Pagination, setPagination] = useState() // se guarda el token de la paginacion de la variable videos
    const [WordKey, setWordKey] = useState() // se almacena la palabra que digito el usuario en el search

    // props Traemos los videos filtrados por el component search
    const FilterVideo = (data) => {
        axios.get(api, {
            params:{
                key:KEY,
                q: data.search, //resultado de busqueda
                maxResults: 10,
                type:'video',
                part:'snippet',
                order:'viewCount'
            }
        })
        .then(res => {
            setVideos(res.data)
            setPagination({
                nextPageToken: res.data.nextPageToken,
                pageInfo: res.data.pageInfo
            })
            setWordKey(data.search)
        })
        .catch(error => {
            alert('ocurrio un error en la consulta')
            console.log(error)
        })
    }

    // props trae  el video seleccionado del Component DataList
    const ViewYoutubeVideo = (video) => {
        setViewVideo(video);
    }

    // Pagination props Component Paginate
    const NextPagination = () => {
        axios.get(api, {
            params:{
                pageToken: Pagination.nextPageToken,
                key:KEY,
                q: WordKey, //resultado de busqueda
                maxResults: 10,
                type:'video',
                part:'snippet',
                order:'viewCount'
            }
        })
        .then(res => {
            setVideos(res.data)
            setPagination({
                nextPageToken: res.data.nextPageToken,
                pageInfo: res.data.pageInfo,
                prevPageToken: res.data.prevPageToken
            })
        })
        .catch(error => {
            alert('ocurrio un error en la consulta')
            console.log(error)
        })
        
    }
    const BackPagination = () => {
        axios.get(api, {
            params:{
                pageToken: Pagination.prevPageToken,
                key:KEY,
                q: WordKey, //resultado de busqueda
                maxResults: 10,
                type:'video',
                part:'snippet',
                order:'viewCount'
            }
        })
        .then(res => {
            setVideos(res.data)
            setPagination({
                nextPageToken: res.data.nextPageToken,
                pageInfo: res.data.pageInfo,
                prevPageToken: res.data.prevPageToken
            })
        })
        .catch(error => {
            alert('ocurrio un error en la consulta')
            console.log(error)
        })    
    }
    return (
        <div className="p-5">
            <Search FilterVideo={FilterVideo}></Search> <br></br><br></br>
            <div className="row">
                <div className="col-8">
                    <DataList Videos={Videos} ViewYoutubeVideo={ViewYoutubeVideo}></DataList>
                </div>
                <div className="col-4"> 
                    <DetailList  BackPagination={BackPagination} NextPagination={NextPagination} ViewVideo={ViewVideo}></DetailList>
                </div>
            </div>
        </div>
    );
};

export default Youtube;