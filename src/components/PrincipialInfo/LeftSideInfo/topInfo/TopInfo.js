import { useState, useEffect } from 'react'
import './style-topInfo.css'
function TopInfo(params) {
    const [lastProduct, setLastProduct] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('http://localhost:3000/api/products/last')
            .then(response => response.json())
            .then(data => {
                setLastProduct(
                    data
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
            </section>
        </>
    )
}
export default TopInfo