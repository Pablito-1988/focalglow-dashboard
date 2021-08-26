import { useState, useEffect } from 'react'
import './style-topInfo.css'
function TopInfo(params) {
    const [lastProduct, setLastProduct] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('/api/products/last')
            .then(response => response.json())
            .then(data => {
                setLastProduct(
                    data.data
                )
            })

    }, [])
    console.log(lastProduct)

    return (
        <>
            <section className='topInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>
                        Último prodúcto agregado

                    </h4>
                </div>
                {/* <div className='userImage'>
                        <img src={`/img/${lastProduct.images[0].name}`} alt='holay' />
                    </div> */}
                <div className='userPersonalData'>
                    <ul>
                        <li>Nombre: {lastProduct.name} </li>
                        <li>Cantidad : {lastProduct.quantity}</li>
                        <li>Precio : ${lastProduct.price}</li>
                        <li>ID : {lastProduct.id}</li>
                    </ul>

                </div>

            </section>
        </>
    )
}
export default TopInfo