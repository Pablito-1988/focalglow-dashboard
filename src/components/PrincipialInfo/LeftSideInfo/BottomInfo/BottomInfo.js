import { useState, useEffect } from 'react'
import './style-bottomInfo.css'

function BottomInfo(params) {
    const [lastUser, setlastUser] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('http://localhost:3000/api/users/last')
            .then(response => response.json())
            .then(data => {
                setlastUser(
                    data.users
                )
            })

    }, [])
    console.log(lastUser)
    return (
        <>
            <section className='bottomInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>
                        Último Usuario agregado
                    </h4>
                </div>
                <div className='userData'>
                    <div className='userImage'>
                        <p>Aca va la imagen</p>
                    </div>
                    <div className='userPersonalData'>
                        <ul>
                            <li>{lastUser.firstName} {lastUser.lastName}</li>
                            <li>{lastUser.email}</li>
                            <li>{lastUser.id}</li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}
export default BottomInfo