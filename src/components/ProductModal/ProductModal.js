import Table from '../Table/Table'

export default function ProductModal({ columns, products, onClickClose }) {

    return (
        <>
            <div id="openModal" class="modalDialog">
                <div>
                    <button onClick={onClickClose} title="Close" class="close">X</button>
                    <h2>Detalles del Producto</h2>
                    <Table columnName={columns} tableInfo={products} />
                </div>
            </div>

        </>
    )
}


