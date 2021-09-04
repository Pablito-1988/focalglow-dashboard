import './style-rigthSideInfo.css'
import { useState, useEffect } from 'react'
import QuantityProducts from './quantityProducts'
/* import { Link } from 'react-router-dom' */

function RightSideInfo(params) {
   

    const [productByCategory, setproductByCategory] = useState([])
    useEffect(() => {
        fetch('/api/products')
            .then(response => response.json())
            .then(data => {
                setproductByCategory(
                    data.data.countByCategory
                )
            })
    }, [])
    
    let qtyArray = Object.values(productByCategory)
    let categoryKeys = Object.keys(productByCategory)
    



    

    return (
        <>
            <aside className='rigthSideInfo'>
                <div className='rigthSideTitle'>
                    <h4 >Categorias</h4>
                </div>
                <div className='rigthSideCategoryes'>
                    <ul className='categoryList'>
                        {qtyArray.map((e, index) => {
                            return <li className='categoryElement' key={index}> {categoryKeys[index]}
                                {<QuantityProducts qty={e} />}
                            </li>
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}
export default RightSideInfo