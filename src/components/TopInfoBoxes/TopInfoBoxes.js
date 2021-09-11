import './style-topinfobox.css'
import { useState, useEffect } from 'react'
import InfoBox from './infoBox/infoBox'


function TopInfoBox(params) {

    //los estados de los fetch 
    const [productos, setProductos] = useState([])
    const [category, setCategory] = useState([])
    const [users, setUsers] = useState([])
    //nombre de la info 
    const boxName = ['Productos', 'Categorias', 'Usuarios']

    useEffect(() => {

        fetch('http://localhost:3000/api/products/qty')
            .then(response => response.json())
            .then(data => {
                setProductos(
                    data.data
                )
            })
    }, [])
    useEffect(() => {

        fetch('http://localhost:3000/api/category')
            .then(response => response.json())
            .then(data => {
                setCategory(
                    data.meta.total
                )
            })

    }, [])
    useEffect(() => {

        fetch('http://localhost:3000/api/users/qty')
            .then(response => response.json())
            .then(data => {
                setUsers(
                    data.users
                )
            })
    }, [])
    //agergo la info de los 3 fetch a un array para pasarselo a la vista en un map 
    const info = [productos, category, users]
    return (
        <>
            <section className='infoBoxesContainer'>
                {boxName.map((e, i) => {

                    return <InfoBox
                        info={info[i]}
                        name={e}
                    />
                })}
            </section>
        </>
    )
}
export default TopInfoBox