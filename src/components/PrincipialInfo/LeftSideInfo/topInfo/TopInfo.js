import { useState, useEffect } from 'react'
import './style-topInfo.css'
import Modal from '../../Modal/Modal'
/* import { Link } from 'react-router-dom' */
function TopInfo(params) {
    const [lastProduct, setLastProduct] = useState(null)

    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('/api/products/last')
            .then(response => response.json())
            .then(data => {

                console.log(data)
                setLastProduct(
                    data
                )
                console.log(lastProduct)
            })
    }, [])

    const [displayProductModal, setDisplayProductModal] = useState(false)

    function showProductModal(params) {
        setDisplayProductModal(true)
    }
    function hideProductModal(params) {
        setDisplayProductModal(false)
    }


    return (
        <>
            <section className='topInfoWrapper'>
                <div className='topInfoTitle'>
                    <h4>
                        Último producto agregado
                    </h4>
                </div>

                {lastProduct &&
                    <div className='lastProductData'>
                        <div className='userImage'>
                            <img className='productImage' src={`/img/${lastProduct.data.images[0].name}`} alt='last product' />
                        </div>
                        <div className='lastData'>
                            <ul>
                                <li><h3>{lastProduct.data.name}</h3></li>
                                <li><h4>Cantidad: {lastProduct.data.quantity}</h4></li>
                                <li><h4>Precio base: ${lastProduct.data.price}</h4></li>
                            </ul>
                            <button onClick={showProductModal} className='moreInfoButton'>Ver detalles del producto</button>
                        </div>
                    </div>
                }

                {displayProductModal && <Modal
                    onClickClose={() => hideProductModal()}
                    info={lastProduct}
                />}

            </section>
        </>
    )
}
export default TopInfo