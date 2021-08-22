import Imagen from './assets/img/somos.jpg'
import './style-us.css'

function Us(params) {
    return(
        <>
            <main>
                <h2>Quiénes Somos</h2>
                <div class="main-wrapper">
                    <div class="aside-text">
                        <p>
                            <strong>Focal Glow</strong> es diseño y creatividad, iluminación y pasión, adaptación y dedicación al
                            cliente.<br /><br />

                            Somos especialistas en crear <strong>emociones</strong> a través de la luz. Nuestra experiencia en el sector
                            consolida el éxito de nuestros proyectos.<br />

                            De principio a fin, trabajamos mano a mano con nuestros clientes, sabiendo cumplir con las necesidades y
                            expectativas que requiere cada desafío y, ofreciendo un servicio y gestión integral del proyecto.<br /><br />

                            Nos divierte <strong>transformar</strong> lugares, pero también queremos llegar a las personas que
                            interactúan en esos <strong>espacios</strong>. Adaptamos el mundo del cliente transformándolo en un concepto
                            propio e identificador.<br /><br />

                            Hoy en día seguimos <strong>innovando</strong> en cada una de nuestras creaciones, dotando de carácter y
                            sofisticación cada proyecto.<br /><br />

                            La cercanía es uno de nuestros principales valores. Nos diferenciamos de las graplataformas on-line en la
                            especialización y apostamos por un trato más cercano de persona a persona <strong>¡Somos un equipo!</strong
                            ><br />
                            Nuestro compromiso se basa en la lealtad. Trabajamos codo con codo para hacernos más fuerte.
                            <strong>¡Siempre estamos a tu lado!</strong>
                        </p>
                    </div>
                    <div class="aside-image">
                        <img src={Imagen} alt="nuestro local" />
                    </div>
                </div>
            </main>
        </>
    )
}
export default Us