import './style-topinfobox.css'
 
import ProductInfoBox from './productsInfoBox/productInfoBox'
import UserInfoBox from './userInfoBox/userInfoBox'
import CategoryInfoBox from './CategoryInfoBox/CategoryInfoBox'

function TopInfoBox(params) {
    
    
   
    return(
        <>
            <section className='infoBoxesContainer'>
                <ProductInfoBox/>
                <UserInfoBox/>
                <CategoryInfoBox/>
            </section>
        </>
    )
}
export default TopInfoBox