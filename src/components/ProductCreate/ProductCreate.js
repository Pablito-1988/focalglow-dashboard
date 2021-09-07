import './style-productCreate.css'

function hola(params) {


    return (
        <body>
           
             <div className='formContainer'>
                <form>
                    <div className='form_left'>
                        <label className='labelName'>Category</label>
                        <select>
                            <option>Plafón</option>
                            <option>Apliques</option>
                            <option>Pie</option>
                            <option>Colgantes</option>
                            <option>Spots</option>
                            <option>Lineales</option>
                            <option>Mesa</option>
                            <option>Exterior</option>
                            <option>Downloghts</option>
                        </select>
                        <label className='labelName'>Nombre del Producto</label>
                        <input type='text' className='productName'/>
                        <label className='labelName'>Cantidad</label>
                        <input type='number' className='number' min='0' />
                        <hr className='separador' />
                        <h3 className='featuresTitle'>Features</h3>
                        <fieldset className='fuente'>
                            <legend className='title'>Fuente</legend>
                            <input type="radio" id="kraken" name="monster" />
                            <label for="kraken">LED</label><br />
                            <input type="radio" id="sasquatch" name="monster" />
                            <label for="sasquatch">Lámpara</label><br />
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Material</legend>
                            <input type="checkbox" id="Aluminio" name="Aluminio" />
                            <label for="Aluminio">Aluminio</label><br />
                            <input type="checkbox" id="Chapa" name="Chapa" />
                            <label for="Chapa">Chapa</label><br />
                            <input type="checkbox" id="Madera" name="Madera" />
                            <label for="Madera">Madera</label><br />
                            <input type="checkbox" id="Hierro" name="Hierro" />
                            <label for="led">Hierro</label><br />
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Optica</legend>
                            <input type="checkbox" id="Spot" name="Spot" />
                            <label for="Spot">Spot</label><br />
                            <input type="checkbox" id="Flood" name="Flood" />
                            <label for="Flood">Flood</label><br />
                            <input type="checkbox" id="Wideflood" name="Wideflood" />
                            <label for="Wideflood">Wideflood</label><br />
                            <input type="checkbox" id="Ovalflood" name="Ovalflood" />
                            <label for="Ovalflood">Ovalflood</label><br />
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>CCT</legend>
                            <input type="checkbox" id="2700K" name="2700K" />
                            <label for="2700K">2700K</label><br />
                            <input type="checkbox" id="3000K" name="3000K" />
                            <label for="3000K">3000K</label><br />
                            <input type="checkbox" id="3500K" name="3500K" />
                            <label for="3500K">3500K</label><br />
                            <input type="checkbox" id="4000K" name="4000K" />
                            <label for="4000K">4000K</label><br />
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Dim</legend>
                            <input type="checkbox" id="Switch" name="Switch" />
                            <label for="Switch">Switch</label><br />
                            <input type="checkbox" id="Dimeable" name="Dimeable" />
                            <label for="Dimeable">Dimeable</label><br />
                            <input type="checkbox" id="DALI" name="DALI" />
                            <label for="DALI">DALI</label><br />
                            <input type="checkbox" id="Bluetooth" name="Bluetooth" />
                            <label for="Bluetooth" className='Bluetooth'>Bluetooth <i class="fab fa-bluetooth"></i></label><br />
                        </fieldset>
                        <label>Precio</label>
                        <input type='number' className='number' min='0' />
                        <label>Descripción del producto</label>
                        <textarea type='text' />
                    </div>
                    <div class="form_right">

                        <p>hola</p>
                    </div>
                </form>

            </div>

        </body>
    )
}

export default hola


