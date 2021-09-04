import './style-Body.css'
import TopInfoBox from '../TopInfoBoxes/TopInfoBoxes'
import PrincipialInfo from '../PrincipialInfo/PrincipalInfo'
import ProductList from '../Product List/ProductList'


function Body(params) {
    return (
        <>
            <TopInfoBox />
            <PrincipialInfo />
            <ProductList />
        </>
    )
}

export default Body