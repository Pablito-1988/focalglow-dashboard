
import './style-404.css'
/* import Imagen from  './error-404.jpg' */

function Error404(params) {
    return (
        <a href="/"
            target="_blank">
            <header class="top-header">
            </header>
            <div>
                <div class="starsec"></div>
                <div class="starthird"></div>
                <div class="starfourth"></div>
                <div class="starfifth"></div>
            </div>
            <div class="lamp__wrap">
                <div class="lamp">
                    <div class="cable"></div>
                    <div class="cover"></div>
                    <div class="in-cover">
                        <div class="bulb"></div>
                    </div>
                    <div class="light"></div>
                </div>
            </div>
            <section class="error">
                <div class="error__content">
                    <div class="error__message message">
                        <h1 class="message__title">Page Not Found</h1>
                        <p class="message__text">Lo lamentamos, pero me parece que por acá no es jajajaja</p>
                    </div>
                    <div class="error__nav e-nav">
                        <a href="/"
                            target="_blanck" class="e-nav__link"> </a>
                    </div>
                </div>
            </section>
        </a>
    )
}
export default Error404