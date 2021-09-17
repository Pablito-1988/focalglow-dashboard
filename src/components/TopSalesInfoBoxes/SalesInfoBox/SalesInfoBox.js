function SalesInfoBox(props) {
    const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return(
        <div className='infoBox' >
            <h4>
                Total de {props.name}:
            </h4>
            <h4 className='qtyProducts'>
                   {toThousand(props.info)}
            </h4>
        </div>
    )
}
export default SalesInfoBox