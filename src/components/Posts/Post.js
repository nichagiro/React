import React from "react"
import GestionPost from "./GestionPost"
import ListPost from "./ListPost"

const Post = () => {

    return (
        <div className="p-4">
            <div className="d-flex flex-wrap justify-content-around">
                <ListPost />
                <GestionPost/>
            </div>
        </div>
    )
}

export default Post
