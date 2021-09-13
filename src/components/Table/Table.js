import Row from '../Row/Row'
export default function Table({ columnName, tableInfo }) {
    console.log(columnName)
    console.log(tableInfo)
    return (

        <table>
            <tr>
                {columnName.map(column => <th>{column}</th>)}
            </tr>
            {tableInfo.map(info => <Row data={info} column={columnName} />)}

        </table>

    )

}



