import { useState, useEffect } from 'react'
import Table from '../Table/Table'

export default function MostSold() {

    const [productModal, setProductModal] = useState(false)
    const [mostSold, setMostSold] = useState([])
    const [columns, setColumns] = useState([])
    const [lastSold, setLastSold] = useState([])
    const [modalInfo, setModalInfo] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/checkout/listBySold/1/limit/5')
            .then(response => response.json())
            .then(data => {
                setMostSold(data.data)
                setColumns(Object.keys(mostSold[0]))
            })
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
        setModalInfo(mostSold)
        setProductModal(true)
    }
    function showProductModalLast() {
        setColumns(Object.keys(lastSold[0]))
        setModalInfo(lastSold)
        setProductModal(true)
    }

    function hideProductModal() {
        setProductModal(false)
    }



    return (
        <>
            <div id="openModal" class="modalDialog">
                <div>
                    {/* <button onClick={onClickClose} title="Close" class="close">X</button> */}
                    <h2>Detalles del Producto</h2>
                    <Table columnName={columns} tableInfo={mostSold} />
                </div>
            </div>

        </>
    )
}


