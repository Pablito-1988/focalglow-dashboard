import { useState, useEffect } from 'react'

function CategoryInfoBox(params) {
    const [category, setCategory] = useState([])
    useEffect(() => {
        console.log('%cse monto el componente', 'color : green')
        fetch('http://localhost:3000/api/category')
            .then(response => response.json())
            .then(data => {
                setCategory(
                    data.count.total
                )
            })

    }, [])
    
    return(
        <div className='infoBox'>
            <h4>
                Total de Categorias:  
            </h4>
            <h4>
                {category}
            </h4>
        </div>
    )
}
export default CategoryInfoBox