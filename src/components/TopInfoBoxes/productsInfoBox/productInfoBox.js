import { useState, useEffect } from 'react'
function ProductInfoBox() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('http://localhost:3000/api/products/qty')
            .then(response => response.json())
            .then(data => {
                setProductos(
                    data
                )
            })
    }, [])
    return(
        <div className='infoBox'>
            <h4>
                Total de Productos:  
            </h4>
            <h4 className='qtyProducts'>
                 {productos.data}
            </h4>
        </div>
    )
}
export default ProductInfoBox