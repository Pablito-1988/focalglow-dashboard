import LeftSideInfo from "./LeftSideInfo/letfSideInfo"
import RightSideInfo from './RigthSideInfo/RigthSideInfo'
import './style-principalInfo.css'

function PrincipialInfo(params) {
    return(
        <>
            <section className='mainInfo'>
                <LeftSideInfo/>
                <RightSideInfo />
            </section>
        </>
    )   
}
export default PrincipialInfo