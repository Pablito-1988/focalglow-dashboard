import './style-header.css'
import logo from './assets/img/logo_sinfondo.png'
import {Link} from 'react-router-dom'

function Header(params) {
    return (
        <>
            <div className='headerWrapper'>
                <div className='logoFocalGlow' >
                  <Link to ='/'><img src={logo} alt="Logo Focal Glow" /></Link>  
                </div>

                <nav className='pageLinks'>
                    <ul>
                        <li><Link to='/us'>Nosotros</Link></li>
                        <li><Link to='/'>Datos</Link></li>   
                    </ul>
                </nav>



            </div>
        </>
    )
}

export default Header