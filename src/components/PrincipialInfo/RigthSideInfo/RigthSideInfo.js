import './style-rigthSideInfo.css'
import { useState, useEffect } from 'react'

function RightSideInfo(params) {
    const [category, setCategory] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
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
                    <h4>Categorias</h4>
                </div>
                <div className='rigthSideCategoryes'>
                    <ul className='categoryList'>
                        {category.map((e, index)=> {
                            return <li className='categoryElement' key={index}>
                                {e.name}
                                </li>
                        })}
                    </ul>

                </div>
            </aside>
        </>
    )
}
export default RightSideInfo