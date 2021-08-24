import './style-rigthSideInfo.css'

function RightSideInfo(params) {
    return (
        <>
            <aside className='rigthSideInfo'>
                <div className='rigthSideTitle'>
                    <h4>Categorias</h4>
                </div>
                <div className='rigthSideCategoryes'>
                    <ul className='categoryList'>
                        <li className='categoryElement'>Pie</li>
                        <li className='categoryElement'>Mesa</li>
                        <li className='categoryElement'>Colgante</li>
                        <li className='categoryElement'>Exterior</li>
                    </ul>

                </div>
            </aside>
        </>
    )
}
export default RightSideInfo