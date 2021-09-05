/* import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom' */
import './style-modal.css'

function Modal({onClickClose}) {
 
    return (
        <>
            
            <div id="openModal" class="modalDialog">
                <div>
                    <button onClick={onClickClose} title="Close" class="close">X</button>
                    <h2 >Detalles del Producto</h2>
                    <p>hola</p>
                    <p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>
                    
                    
                </div>
            </div>
        </>
    )
}

 export default Modal