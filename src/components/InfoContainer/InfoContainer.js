import ProductModal from '../ProductModal/ProductModal'
import { useState, useEffect } from 'react'
import './style-infoContainer.css'

export default function InfoContainer() {
    const [productModal, setProductModal] = useState(false)
    const [mostSold, setMostSold] = useState([])
    const [columns, setColumns] = useState([])
    const [lastSold, setLastSold] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/checkout/listBySold/1/limit/5')
            .then(response => response.json())
            .then(data => setMostSold(data.data))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/api/checkout/listByDate/1/limit/5')
            .then(response => response.json())
            .then(data => setLastSold(data.data))
            .catch(error => console.log(error))
    }, [])

    function showProductModalMost() {
        setColumns(Object.keys(mostSold[0]))
        setProductModal(true)
    }
    function showProductModalLast() {
        setColumns(Object.keys(lastSold[0]))
        setProductModal(true)
    }

    function hideProductModal() {
        setProductModal(false)
    }



    return (
        <div class='product-info-button'>
            <button onClick={showProductModalMost}>Más Vendidos</button>
            <button onClick={showProductModalLast}>Últimos Vendidos</button>
            {productModal &&
                <ProductModal 
                onClickClose={() => hideProductModal()}
                    columns={columns} products={mostSold} />}
        </div>)

}