

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
                            <p>Precio : ${props.info.lastProduct.price}</p>
                            <h4>Descripción: </h4><p>{props.info.lastProduct.description}</p>
                                <h4>Features</h4>
                            {props.info.lastProduct.features.map((e, index) => {
                                return <p key={index}>{e.type}: {e.name}</p>
                                })}

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