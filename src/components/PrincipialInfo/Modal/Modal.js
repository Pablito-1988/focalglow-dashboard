import './style-modal.css'

function Modal(props, { onClickClose }) {
	console.log('Entre al modal Gato')
	console.log(props)

	const productFeatures = new Set()
	props.info.data.features.map((feature, index) => {
		productFeatures.add(feature.type)
	})

	console.log(productFeatures)

	/* 	featuresToShow.map((featureToShow, index) => {
			return <div>{featureToShow} {props.info.data.features.map((feature, index) => {
				if(feature.type==featureToShow) {
					{feature.name}
				}
			})} </div>
		}) */

	return (
		<>

			{props.info.data &&
				<div id="openModal" class="modalDialog">
					<div>
						<button onClick={props.onClickClose} title="Close" class="close">X</button>
						<h2>Detalles del Producto</h2>
						<div className='contentWrapper'>
							<div className='imageContainer'>
								<img className='productImg' src={`${props.info.data.image}`} alt='productImg' />
							</div>
							<div className='infoContainer'>
								<h3>Nombre: {props.info.data.name}</h3>
								<p>Cateogria: {props.info.data.category.name}</p>
								<p>Cantidad: {props.info.data.quantity}</p>
								<p>Precio base: ${props.info.data.price}</p>
								<p>Descripción: </p><p>{props.info.data.description}</p>
								<hr className='separador' />
								<h4>Features</h4>
								<p>Dim: </p>
								{props.info.data.features.map((feature, index) => {
									if (feature.type == 'dim') {
										return <p key={index}>Dim: {feature.name}</p>

									}


								})}

								<button className='buttonToWeb'><a target="_blank" rel="noreferrer" href={`http://localhost:3000/product/detail/${props.info.data.id}`}>Ver en web</a></button>
							</div>
						</div>

					</div>
				</div>
			}
		</>
	)
}

export default Modal