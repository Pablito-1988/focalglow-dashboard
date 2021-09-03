import { useState, useEffect } from "react"





function QuantityProducts(props) {
    let nombre = props.nombre
    const [qty, setqty] = useState([])
    useEffect(() => {

        fetch('/api/products/productsByCategory/' + nombre)
            .then(response => response.json())
            .then(data => {
                setqty(
                    data.data.products
                )
            })
    }, [nombre])




    return (
        <>
            <p className='qtyProduct'> : {qty} productos</p>
        </>
    )
}

export default QuantityProducts