import './style-rigthSideInfo.css'
import { useState, useEffect } from 'react'
import QuantityProducts from './quantityProducts'
/* import { Link } from 'react-router-dom' */

function RightSideInfo(params) {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('/api/category')
            .then(response => response.json())
            .then(data => {
                setCategory(
                    data.data
                )
            })
    }, [])




    return (
        <>
            <aside className='rigthSideInfo'>
                <div className='rigthSideTitle'>
                    <h4 >Categorías</h4>
                </div>
                <div className='rigthSideCategoryes'>
                    <ul className='categoryList'>
                        {category.map((e, index) => {
                            return <li className='categoryElement' key={index}> {e.name}
                                <QuantityProducts nombre={e.name} />
                            </li>
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}
export default RightSideInfo