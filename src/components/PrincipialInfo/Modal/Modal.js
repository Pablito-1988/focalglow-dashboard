import './style-modal.css'
import { useState, useEffect } from 'react'


function Modal(props, { onClickClose }) {

	const productFeaturesTypes = ['material', 'source', 'power', 'cct', 'dim', 'optic']

	return (
		<>
			{props.info.data &&

				< div id="openModal" class="modalDialog">
					<div>
						<button onClick={props.onClickClose} title="Close" class="close">X</button>
						<h2>Detalles del Producto</h2>
						<div className='contentWrapper'>
							<div className='imageContainer'>
								<img className='productImg' src={`${props.info.data.image}`} alt='productImg' />
							</div>
							<div className='infoContainer'>
								<h4>Nombre: {props.info.data.name}</h4>
								<p>Cateogria: {props.info.data.category.name}</p>
								<p>Cantidad: {props.info.data.quantity}</p>
								<p>Precio base: ${props.info.data.price}</p>
								<p>Descripción: </p><p>{props.info.data.description}</p>
								<hr className='separador' />
								<h4>Features</h4>
								{productFeaturesTypes.map(featureType => {
									return (
										<p>{featureType[0].toUpperCase() + featureType.substring(1)}:
											{props.info.data.features.map((productFeature, index) => {
												if (productFeature.type === featureType) {
													return <span key={index}>{productFeature.name} </span>
												}
											})}
										</p>
									)

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