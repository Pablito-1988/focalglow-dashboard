export default function Row({ data, column }) {
    return (
        <tr>
        {column.map(name => name != 'order' ? <td>{data[name]}</td> : data[name].id)}
        </tr>
    )
}