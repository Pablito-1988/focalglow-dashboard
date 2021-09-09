import './style-header.css'
import logo from './assets/img/logo_sinfondo.png'
import { Link } from 'react-router-dom'

function Header(params) {
    return (
        <>
            <div className='headerWrapper'>
                <div className='logoFocalGlow' >
                    <Link to='/'><img src={logo} alt="Logo Focal Glow" /></Link>
                </div>

                <nav className='pageLinks'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <div class="dropdown">
                            <li class="dropbtn">Tablas</li>
                            <div class="dropdown-content">
                                <Link to='/us'>Ventas</Link>
                                <Link to='/create'>Creación de Prod.</Link>
                                <Link to='/edit'>Edición de Prod.</Link>
                            </div>
                        </div>
                        <li><Link to='/us'>Nosotros</Link></li>
                        
                        
                    </ul>
                </nav>



            </div>
        </>
    )
}

export default Header