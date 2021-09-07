export default function ProductModal(props, { onClickClose }) {
    return (
        <>

            <div id="openModal" class="modalDialog">
                <div>
                    <button title="Close" class="close">X</button>
                    <h2 >Detalles del Producto</h2>
                    <div className='contentWrapper'>
                        <div className='imageContainer'>
                            <img className='productImg' src={`/img/`} alt='productImg' />
                        </div>
                        <div className='infoContainer'>
                            <h3>Nombre: </h3>
                            <p>Cateogria : </p>
                            <p>Cantidad : </p>
                            <h4>Precio : $</h4>
                            <h4>Descripción: </h4><p></p>
                            <hr className='separador' />
                            <h4>Features</h4>



                            <button className='buttonToWeb'><a href={`http://localhost:3000/product/detail/`}>Ver en web</a></button>
                        </div>
                    </div>



                </div>
            </div>
            
        </>
    )
}

