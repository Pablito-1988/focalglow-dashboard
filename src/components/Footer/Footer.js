import './style-footer.css'
var today = new Date(),
   date =  today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
function Footer() {
   
   return(
    <>
      <div className='footerWrapper'>
            <p>«Copyright {date} por Focal Glow»</p>
      </div>
    </>
   )
}

export default Footer