import './style-modal.css'

function Modal(params) {
    return (
        <>
            
            <div id="openModal" class="modalDialog">
                <div>
                    <a href="#close" title="Close" class="close">X</a>
                    <h2>Mi modal</h2>
                    <p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p>
                    <p>Puedes hacer un montón de cosas aquí, como alertas o incluso crear un formulario de registro aquí mismo.</p>
                </div>
            </div>
        </>
    )
}

 export default Modal