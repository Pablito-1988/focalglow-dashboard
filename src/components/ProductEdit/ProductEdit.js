import '../ProductCreate/style-productCreate.css'
import { useState, useEffect } from 'react'
/* import ImageAndFiles from './ImageAndFiles' */
import ImageInput from '../ProductCreate/ImageInput'
import { Link, useParams } from 'react-router-dom'

function ProductEdit(props) {
    let { id } = useParams()
    console.log(id)
    const [features, setfeatures] = useState([])
    useEffect(() => {

        fetch(`/api/category/features/all`)
            .then(response => response.json())
            .then(data => {
                setfeatures(
                    data.data
                )
            })
    }, [])
    const [category, setCategory] = useState([])
    useEffect(() => {

        fetch(`/api/category/`)
            .then(response => response.json())
            .then(data => {
                setCategory(
                    data.data
                )
            })
    }, [])
    const [productState, setProductState] = useState(false)
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(response => {
                setProduct(
                    response
                )
                setProductState(true)
            })
            .catch((error)=>{
                console.log(error)
            })

    }, [id])

    console.log(product)

    let cct = []
    features.map(e => {
        return e.type === 'cct' ? cct.push(e) : '';
    })
    let power = []
    features.map(e => {
        return e.type === 'power' ? power.push(e) : '';
    })
    let source = []
    features.map(e => {
        return e.type === 'source' ? source.push(e) : '';
    })
    let materiales = []
    features.map(e => {
        return e.type === 'material' ? materiales.push(e) : '';
    })
    let optic = []
    features.map(e => {
        return e.type === 'optic' ? optic.push(e) : '';
    })
    let dim = []
    features.map(e => {
        return e.type === 'dim' ? dim.push(e) : '';
    })




    return (

        <>
            <h1 className='principalTitle'>Edición de producto</h1>
            <div className='formContainer'>
                <form>
                    <div className='form_left'>

                        <h2>Detalles y Features del producto</h2>
                        <label className='labelName'>Categoria</label>
                        <select>
                            {category.map((e, index) => {
                                return <option key={e.name + index} value={e.id}>{e.name}</option>
                            })}
                        </select>
                        <label className='labelName'>Nombre del Producto:</label>
                        {productState && <input type='text' className='productName' placeholder={product.data.name} />}
                        <label className='labelName'>Cantidad:</label>
                        {productState &&<input type='number' className='number' min='0' placeholder={product.data.quantity} />}
                        <label>Precio unitario base:</label>
                        {productState &&<input type='number' className='number' min='0' placeholder={product.data.price} />}
                        <label>Descripción del producto: </label>
                        {productState &&<textarea type='text' placeholder={product.data.description} />}
                        {/* <hr className='separador' /> */}
                        <h2 className='featuresTitle'>Features</h2>
                        <div className='powerWrapper'>
                            <label className='title'>Power</label>

                            <select className='powerSelect' multiple>
                                {power.map((e, index) => {
                                    return <>
                                        <option key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} >{e.name}</option>

                                    </>
                                })}
                            </select>
                            <p className='powerInfo'>Recordá que apretando CTRL podrás seleccionar más de una potencia</p>
                        </div>
                        <fieldset className='fuente'>
                            <legend className='title'>Fuente</legend>

                            {source.map((e, index) => {
                                return (
                                    <div>
                                        <input key={e.name + index} class='radio' type="radio" id={e.name} value={e.id} name={e.name} />
                                        <label  >{e.name}</label>
                                    </div>
                                )
                            })}

                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Material</legend>
                            {materiales.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Optica</legend>
                            {optic.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>

                        <fieldset className='fieldset'>
                            <legend className='title'>CCT</legend>
                            {cct.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Dim</legend>
                            {dim.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                    </div>
                    <div class="form-right">
                        <h2>Imagenes y archivos del producto</h2>
                        <fieldset className='imageFieldset'>
                            <legend>Imagen principal</legend>
                           {productState&& <ImageInput data={product.data.images[0].name} />}
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Dimenciones del producto</legend>
                            {productState && <ImageInput data={product.data.images[2].name} />}
                        </fieldset>
                        <fieldset className='sliderImage'>
                            <legend>Slider</legend>
                            <input className='iamgeInput ' id='slider' multiple type='file' />
                            <p className='sliderInfo'>Apretando CTRL podrás seleccionar más de una imagen</p>
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Hoja tecnica</legend>
                            <input className='iamgeInput' type='file' />
                            {productState && <a href={`http://localhost:3000/pdf/${product.data.files[0].name}`}>Archivo</a>}
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Manual de instalación</legend>
                            <input className='iamgeInput' type='file' />
                            {productState && <a href={`http://localhost:3000/pdf/${product.data.files[1].name}`}>Archivo</a>}
                        </fieldset>

                        <button className='finish' type='submit'>Finalizar edición de producto</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ProductEdit
