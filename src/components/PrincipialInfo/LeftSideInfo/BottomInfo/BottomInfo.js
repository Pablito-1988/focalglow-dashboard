import { useState, useEffect } from 'react'
import './style-bottomInfo.css'

function BottomInfo(params) {
    const [lastUser, setlastUser] = useState(null)
    useEffect(() => {

        fetch('/api/users/last')
            .then(response => response.json())
            .then(data => {
                setlastUser(
                    data.data
                )
            })
    }, [])

    return (
        <>
            <section className='bottomInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>Último usuario agregado</h4>
                </div>

                {lastUser &&
                    <>
                        <div className='userData'>
                            <div className='userImage'>
                                <img className='image' src={`/img/profile-pictures/${lastUser.profileImg}`} alt='holay' />
                            </div>
                            <div className='userPersonalData'>
                                <ul>
                                    <li><h4>Id: {lastUser.id}</h4></li>
                                    <li><h4>Nombre: {lastUser.firstName} {lastUser.lastName}</h4> </li>
                                    <li><h4>Email: {lastUser.email}</h4></li>
                                </ul>

                            </div>
                        </div>
                    </>
                }

            </section>
        </>
    )
}
export default BottomInfo