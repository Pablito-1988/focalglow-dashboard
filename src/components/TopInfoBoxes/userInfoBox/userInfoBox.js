import { useState, useEffect } from 'react'

function UserInfoBox(params) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('http://localhost:3000/api/users/qty')
            .then(response => response.json())
            .then(data => {
                setUsers(
                    data
                )
            })
    }, [])
    return(
        <div className='infoBox'>
            <h4>
                Total de Usuarios: 
            </h4>
            <h4>
                {users.users}
            </h4>
        </div>
    )
}
export default UserInfoBox