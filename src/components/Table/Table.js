import Row from '../Row/Row'
import './style-sold-table.css'
export default function Table({ columnName, tableInfo }) {

    return (

        <table className='table-sold'>
            <tr>
                {columnName.map(column => <th>{column}</th>)}
            </tr>
            {tableInfo.map((info, index) => <Row key= {index} data={info} column={columnName} />)}

        </table>

    )

}



