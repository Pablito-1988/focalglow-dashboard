import './style-row.css'
export default function Row({ data, column }) {

    return (
        <tr>
            {column.map(name => {
                return (
                    name === 'Imagen' ? <td><img className='product-table-image' src={`/img/${data[name]}`}></img></td> :
                        name === 'Fecha' ? <td>{(new Date(data[name])).toLocaleString()}</td> :
                            <td>{data[name]}</td>)
            })
            }
        </tr>
    )
}