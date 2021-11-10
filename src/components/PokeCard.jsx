import React from 'react';
import {Link} from "react-router-dom";


function PokeCard(props) {
    return (
        <div>
            <div className="card mx-auto my-5 w-25 p-3 shadow rounded">
                <div className="row g-0 ">
                    <div className="text-center">
                        <img src={props.Pokemon.sprites.front_default} className="img-fluid rounded-start" alt={props.Pokemon.name}></img>
                    </div>
                    <div className="">
                        <div className="card-body text-center">
                            <h3 className="card-title">{props.Pokemon.name}</h3>                  
                        </div>
                    </div>
                </div>
            </div>  
            <div className="text-center">
                <Link className="btn btn-danger" to="/PokePerfil">Atras</Link>
            </div> 
        </div>         
    );
}

export default PokeCard;