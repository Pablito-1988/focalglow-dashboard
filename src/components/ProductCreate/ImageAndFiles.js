import ImageInput from './ImageInput'

function ImageAndFiles(params) {
    return(
        <>
            <h2>Imagenes y archivos del producto</h2>
            <fieldset className='imageFieldset'>
                <legend>Imagen principal</legend>
                <ImageInput />
            </fieldset>
            <fieldset className='imageFieldset'>
                <legend>Dimenciones del producto</legend>
                <ImageInput />
            </fieldset>
            <fieldset className='sliderImage'>
                <legend>Slider</legend>
                <input className='iamgeInput ' id='slider' multiple type='file' />
                <p className='sliderInfo'>Apretando CTRL podrás seleccionar más de una imagen</p>
            </fieldset>
            <fieldset className='imageFieldset'>
                <legend>Hoja tecnica</legend>
                <input className='iamgeInput' type='file' />
            </fieldset>
            <fieldset className='imageFieldset'>
                <legend>Manual de instalación</legend>
                <input className='iamgeInput' type='file' />
            </fieldset>

            <button className='finish' type='submit'>Finalizar creación de producto</button>
        </>
    )

    
}

export default ImageAndFiles