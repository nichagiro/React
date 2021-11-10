import  Axios from "axios";
import React from "react";

const ReactEfect = () => {
    const [Users, setUsers] = React.useState([])
    
    //mount()
    React.useEffect(() => {
        GetUsers();
     }, [])
     
     const GetUsers = () => {
         Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                const data = res.data;
                setUsers(data);
            })
     }

    return ( 
        <div className="p-5">
            <h1 className="text-center">UseEffect - Mount()</h1>
            <ul>
                {
                    Users.length > 0 ? (
                        Users.map(item => (
                            <li key={item.id}>
                                {item.name} -- {item.email}
                            </li>
                        ))
                    ):(
                        <li>
                            no hay datos...
                        </li>
                    )
                }
            </ul>
        </div>
     );
}
 
export default ReactEfect;