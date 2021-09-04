import { useState, useEffect } from 'react'
import './style-bottomInfo.css'

function BottomInfo(params) {
    const [lastUser, setlastUser] = useState(null)
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('/api/users/last')
            .then(response => response.json())
            .then(data => {
                setlastUser(
                    data.users
                )
            })
    }, [])
    
    return (
        <>
            <section className='bottomInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>Ultimo usuario agregado</h4>
                </div>

                {lastUser &&
                    <>
                        <div className='userData'>
                            <div className='userImage'>
                            <img className='image'  src={`/img/profile-pictures/${lastUser.profileImg}`} alt='holay' />
                            </div>
                            <div className='userPersonalData'>
                                <ul>
                                    <li>Id: {lastUser.id}</li>
                                    <li> Nombre : {lastUser.firstName} {lastUser.lastName}</li>
                                    <li>Email: {lastUser.email}</li>
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