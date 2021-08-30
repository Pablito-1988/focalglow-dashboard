import './style-rigthSideInfo.css'
import { useState, useEffect,useRef } from 'react'
import QuantityProducts from './quantityProducts'

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
    const showQty = useRef()
    console.log(showQty)
    /* const show=()=>{
        showQty.current.style.display = 'block'
    }
    const hide = () => {
        showQty.current.style.display = 'none'
    } */
    

    return (
        <>
            <aside className='rigthSideInfo'>
                <div className='rigthSideTitle'>
                    <h4 >Categorias</h4>
                </div>
                <div className='rigthSideCategoryes'>
                    <ul className='categoryList'>
                        {category.map((e, index) => {
                            return<li className='categoryElement' /* onClick={show} onMouseOut={hide} */ key={index}> {e.name}
                            
                                <QuantityProducts ref={showQty} nombre= {e.name} />
                                  
                                   
                            </li>
                        })}
                    </ul>
                </div>
            </aside>
        </>
    )
}
export default RightSideInfo