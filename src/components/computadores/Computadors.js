import React from 'react'
import Buttons from './Buttons'
import ListCompu from './ListCompu'
import Search from './Search'

const Computadors = () => {
    return (
        <div className="p-5">
            <div className="d-flex">
                <Buttons/>
                <Search/>
            </div>
           <ListCompu/>
        </div>
    )
}

export default Computadors 


