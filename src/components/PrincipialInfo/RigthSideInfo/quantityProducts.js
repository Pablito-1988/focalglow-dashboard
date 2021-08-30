import { useState, useEffect } from "react"





function QuantityProducts(props) {
     let nombre = props.nombre
    const [qty, setqty] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('/api/products/productsByCategory/'+ nombre )
            .then(response => response.json())
            .then(data => {
                setqty(
                    data.data.products
                   
                )
                 console.log(data)
            })
    }, [nombre])




    return(
        <>
        <p>{props.nombre}</p>
            <p >: {qty}</p>
        </>
    )
}

export default QuantityProducts