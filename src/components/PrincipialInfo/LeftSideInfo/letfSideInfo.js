import TopInfo from "./topInfo/TopInfo"
import BottomInfo from "./BottomInfo/BottomInfo"
import './style-leftSideInfo.css'
function LeftSideInfo(params) {
    return(
        <>
            <aside className= 'leftSideInfo'>
            <TopInfo/>
            <BottomInfo/>
            </aside>
        </>
    )
}
export default LeftSideInfo