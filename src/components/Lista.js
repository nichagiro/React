import React from 'react';
const Lista = ({ datos, currenDate, admin }) => {
    return (
        <div>
            {
                datos.map((item, index) =>
                    <p key={index}>{index} -- {item.name}</p>
                )
            }

        </div>
    );
}

export default Lista;