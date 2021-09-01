
function ProductInfoBox(props) {
 
    return(
        <div className='infoBox' >
            <h4>
                Total de {props.name}: 
            </h4>
            <h4 className='qtyProducts'>
                   {props.info}
            </h4>
        </div>
    )
}
export default ProductInfoBox