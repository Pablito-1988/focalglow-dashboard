

import './style-modal.css'

function Modal(props,{ onClickClose }) {
    return (
        <>
            {props.info.lastProduct &&
                <div id="openModal" class="modalDialog">
                    <div>
                        <button onClick={props.onClickClose} title="Close" class="close">X</button>
                        <h2 >Detalles del Producto</h2>
                        <div className='contentWrapper'>
                            <div className='imageContainer'>           
                              <img  className='productImg' src={`/img/${props.info.lastProduct.images[0].name}`} alt='productImg' />                            
                            </div>
                            <div className='infoContainer'>
                            <h3>Nombre: {props.info.lastProduct.name}</h3>
                            <p>Cateogria : {props.info.lastProduct.category.name}</p>
                            <p>Cantidad : {props.info.lastProduct.quantity}</p>
                            <h4>Precio : ${props.info.lastProduct.price}.00</h4>
                            <h4>Descripción: </h4><p>{props.info.lastProduct.description}</p>
                            <hr className='separador'/>
                                <h4>Features</h4>
                            <div className='feateuresWrapper'>
                            {props.info.lastProduct.features.map((e, index) => {
                                return <p key={index}>{e.type}: {e.name}</p>
                                })}
                            </div>
                            <button className='buttonToWeb'><a href={`http://localhost:3000/product/detail/${props.info.lastProduct.id}`}>Ver en web</a></button>
                            </div>
                        </div>



                    </div>
                </div>
            }
        </>
    )
}

export default Modal