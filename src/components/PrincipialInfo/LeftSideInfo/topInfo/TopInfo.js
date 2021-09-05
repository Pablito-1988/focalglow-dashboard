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
                setLastProduct(
                    data.data
                )
            })
    }, [])
    const[displayProductModal, setDisplayProductModal] = useState(false)
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
                        Último prodúcto agregado

                    </h4>
                </div>

                {lastProduct &&
                    <div className='lastProductData'>
                        <div className='userImage'>
                            <img className='productImage'  src={`/img/${lastProduct.images[0].name}`} alt='holay' />
                        </div>
                        <div className='lastData'>
                            <ul>
                                <li>Cateogria : {lastProduct.category.name}</li>
                                <li>Nombre: {lastProduct.name} </li>
                                <li>Cantidad : {lastProduct.quantity}</li>
                                <li>Precio : ${lastProduct.price}</li>
                                <li>ID : {lastProduct.id}</li>    
                            </ul>
                        <button onClick={showProductModal} className='moreInfoButton'>Ver detalles del producto</button>
                        </div>
                    </div>
                }

                {displayProductModal && <Modal onClickClose={()=>hideProductModal()} />}

            </section>
        </> 
    )
}
export default TopInfo