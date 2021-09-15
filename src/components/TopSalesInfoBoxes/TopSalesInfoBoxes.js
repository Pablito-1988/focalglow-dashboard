//import './style-topinfobox.css'
import { useState, useEffect } from 'react'
import SalesInfoBox from './SalesInfoBox/SalesInfoBox'


function TopSalesInfoBox(params) {

	
	const [totalSales, setTotalSales] = useState([])
	const [totalItems, setTotalItems] = useState([])
	const [SalesQty, setSalesQty] = useState([])

	const boxName = ['Ventas', 'Operaciones', 'Items vendidos']

	useEffect(() => {
		fetch('http://localhost:3000/api/checkout/salesTotal')
			.then(response => response.json())
			.then(data => {
				console.log('hola')
				console.log(data)
				setTotalSales(
					'$' + data.data.totalSales
				)
			})
	}, [])

	useEffect(() => {
		fetch('http://localhost:3000/api/checkout/salesTotal')
			.then(response => response.json())
			.then(data => {
				setSalesQty(
					data.data.numberSales
				)
			})

	}, [])

	useEffect(() => {
		fetch('http://localhost:3000/api/checkout/salesTotal')
			.then(response => response.json())
			.then(data => {
				setTotalItems(
					data.data.totalItems
				)
			})

	}, [])

	const info = [totalSales, SalesQty, totalItems]
	return (
		<>
			<section className='infoBoxesContainer'>
				{boxName.map((e, i) => {

					return <SalesInfoBox
						info={info[i]}
						name={e}
					/>
				})}
			</section>
		</>
	)
}
export default TopSalesInfoBox