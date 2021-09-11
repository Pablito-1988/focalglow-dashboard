import './style-row.css'
export default function Row({ data, column }) {


    return (
        <tr>
            {column.map(name => {
                return (
                    name === 'Imagen' ? <td><img className='product-table-image' src={`/img/${data[name]}`}></img></td> :
                        name === 'Fecha' ? <td>{Date(data[name])}</td> :
                            <td>{data[name]}</td>)
            })
            }
        </tr>
    )
}