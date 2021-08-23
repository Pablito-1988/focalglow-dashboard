import LeftSideInfo from "./LeftSideInfo/letfSideInfo"
import RightSideInfo from './RigthSideInfo/RigthSideInfo'


function PrincipialInfo(params) {
    return(
        <>
            <main className='mainInfo'>
                <LeftSideInfo/>
                <RightSideInfo />

            </main>
        </>
    )   
}
export default PrincipialInfo