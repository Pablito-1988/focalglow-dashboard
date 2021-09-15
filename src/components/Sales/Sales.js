import InfoContainer from './InfoContainer'
import TopSalesInfoBox from '../TopSalesInfoBoxes/TopSalesInfoBoxes'

function Sales() {

  return (
    <section className='bottomInfoWrapper'>
      <div className='rigthSideTitle'>
        <h4>Ventas</h4>
      </div>
      <TopSalesInfoBox />
      <InfoContainer />
    </section>
  )
}

export default Sales