import React, {Fragment} from "react";

const Error = ({error}) => {
    console.log({error})
    return (
        <Fragment>
            <p className="text-danger">{error}</p> 
        </Fragment>    
    );
}   
 
export default Error;