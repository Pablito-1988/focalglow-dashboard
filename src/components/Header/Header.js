import './style-header.css'
import logo from '../../Assets/img/logo_sinfondo.png'

function Header(params) {
    return (
        <>
            <div className='headerWrapper'>
                <div className='logoFocalGlow' >
                    <img src={logo} alt="Logo Focal Glow" />
                </div>

                <nav className='pageLinks'>
                    <ul>
                        <li>Nosotros</li>
                        <li>Hola </li>
                        <li>Como andas</li>
                        <li>Bien bien </li>
                    </ul>
                </nav>



            </div>
        </>
    )
}

export default Header