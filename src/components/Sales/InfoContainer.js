import ProductModal from '../ProductModal/ProductModal'
import { useState, useEffect } from 'react'
import Table from '../Table/Table'
import './style-infoContainer.css'

export default function InfoContainer() {
    const [productModal, setProductModal] = useState(false)
    const [mostSold, setMostSold] = useState([])
    const [mostColumns, setMostColumns] = useState([])
    const [lastColumns, setLastColumns] = useState([])
    const [lastSold, setLastSold] = useState([])
    const [modalInfo, setModalInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/checkout/listBySold/1/limit/5')
            .then(response => response.json())
            .then(data => {
                setMostSold(data.data)
                setMostColumns(data.meta.headers)
            })
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        fetch('http://localhost:3000/api/checkout/listByDate/1/limit/5')
            .then(response => response.json())
            .then(data => {
                setLastSold(data.data)
                setLastColumns(data.meta.headers)
            })
            .catch(error => console.log(error))
    }, [])






    return (
        <div class='product-info-button'>
            <h2>Productos más Vendidos</h2>
            {mostSold.length > 0 ?
                <Table columnName={mostColumns} tableInfo={mostSold} /> :
                <span>Aún no hay productos vendidos</span>}
            <h2>Últimos productos vendidos</h2>

            {lastSold.length > 0 ?
                <Table columnName={lastColumns} tableInfo={lastSold} /> :
                <span>Aún no hay productos vendidos</span>}
        </div>)

}