import '../ProductCreate/style-productCreate.css'
import { useState, useEffect, useMemo } from 'react'
import ImageInput from '../ProductCreate/ImageInput'
import {  useParams } from 'react-router-dom'

function ProductEdit(props) {
    //capruto el id del params
    let { id } = useParams()
    //traigo las features desde la db 
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

    //separo las features para poder mapearlas en el formulario 
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

    //traigo las categorias de la db 
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

    //traigo el producto usando el parametro que vino por la url y seteo un estado para el producto
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
            .catch((error) => {
                console.log(error)
            })

    }, [id])
      //separo las features que vienen del producto para poder comparar en el formulario. Y uso useMemo() para memorizar los valores   
     let old = useMemo(() => {
        
         if (productState) {
        const oldCct = []
        product.data.features.map(e => {
            return e.type === 'cct' ? oldCct.push(e) : '';
        })
        const oldPower = []
        product.data.features.map(e => {
            return e.type === 'power' ? oldPower.push(e) : '';
        })
        const oldSource = []
        product.data.features.map(e => {
            return e.type === 'source' ? oldSource.push(e) : '';
        })
        const oldMateriales = []
        product.data.features.map(e => {
            return e.type === 'material' ? oldMateriales.push(e) : '';
        })
        const oldOptic = []
        product.data.features.map(e => {
            return e.type === 'optic' ? oldOptic.push(e) : '';
        })
        const oldDim = []
        product.data.features.map(e => {
            return e.type === 'dim' ? oldDim.push(e) : '';
        })
        return { oldCct, oldPower, oldSource, oldMateriales, oldOptic, oldDim }
    }   //agrego las dependencias que tiene que mirar el hook
     }, [productState, product])
     
            //si el producto ya llego del fetch, y ya se armaron los arrays con las features del producto a editar que renderize todo 
    return (productState && old  )&& (<>
        
            <h1 className='principalTitle'>Edici??n de producto</h1>
            <div className='formContainer'>
                <form>
                    <div className='form_left'>

                        <h2>Detalles y Features del producto</h2>
                        <label className='labelName'>Categoria</label>
                        <select>
                            {category.map((e, index) => {
                                return <option key={e.name + index} selected={product.data.category.id === e.id? true : false} value={e.id}>{e.name}</option>
                            })}
                        </select>
                        <label className='labelName'>Nombre del Producto:</label>
                        {productState && <input type='text' className='productName' placeholder={product.data.name} />}
                        <label className='labelName'>Cantidad:</label>
                        {productState && <input type='number' className='number' min='0' placeholder={product.data.quantity} />}
                        <label>Precio unitario base:</label>
                        {productState && <input type='number' className='number' min='0' placeholder={product.data.price} />}
                        <label>Descripci??n del producto: </label>
                        {productState && <textarea type='text' placeholder={product.data.description} />}
                        {/* <hr className='separador' /> */}
                        <h2 className='featuresTitle'>Features</h2>
                        <div className='powerWrapper'>
                            <label className='title'>Power</label>

                            <select className='powerSelect' multiple>
                                {power.map((e, index) => {

                                    return <>
                                        {productState && <option key={e.name + index} type="checkbox" selected={!!old.oldPower.find((j) => j.id === e.id)} id={e.name} value={e.id} name={e.name} >{e.name}</option>}

                                    </>
                                })}
                            </select>
                            <p className='powerInfo'>Record?? que apretando CTRL podr??s seleccionar m??s de una potencia</p>
                        </div>
                        <fieldset className='fuente'>
                            <legend className='title'>Fuente</legend>

                            {source.map((e, index) => {
                                return (
                                    <div>
                                        <input key={e.name + index} class='radio' type="radio" checked={!!old.oldSource.find((j)=> j.id === e.id)} id={e.name} value={e.id} name={e.name} />
                                        <label  >{e.name}</label>
                                    </div>
                                )
                            })}

                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Material</legend>
                            {materiales.map((e, index) => {
                                return <>

                                    <input key={e.name + index} type="checkbox" checked={!!old.oldMateriales.find((j) => j.id === e.id)}  id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Optica</legend>
                            {optic.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" checked={!!old.oldOptic.find((j) => j.id === e.id)} id={e.name} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>

                        <fieldset className='fieldset'>
                            <legend className='title'>CCT</legend>
                            {cct.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} checked={!!old.oldCct.find((j) => j.id === e.id)} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                        <fieldset className='fieldset'>
                            <legend className='title'>Dim</legend>
                            {dim.map((e, index) => {
                                return <>
                                    <input key={e.name + index} type="checkbox" id={e.name} checked={!!old.oldDim.find((j) => j.id === e.id)} value={e.id} name={e.name} />
                                    <label >{e.name}</label><br />
                                </>
                            })}
                        </fieldset>
                    </div>
                    <div class="form-right">
                        <h2>Imagenes y archivos del producto</h2>
                        <fieldset className='imageFieldset'>
                            <legend>Imagen principal</legend>
                            {productState && <ImageInput data={product.data.images[0].name} />}
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Dimenciones del producto</legend>
                            {productState && <ImageInput data={product.data.images[2].name} />}
                        </fieldset>
                        <fieldset className='sliderImage'>
                            <legend>Slider</legend>
                            <input className='iamgeInput ' id='slider' multiple type='file' />
                            <p className='sliderInfo'>Apretando CTRL podr??s seleccionar m??s de una imagen</p>
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Hoja tecnica</legend>
                            <input className='iamgeInput' type='file' />
                            {productState && <a href={`http://localhost:3000/pdf/${product.data.files[0].name}`}>Haz click para ver el archivo actual</a>}
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Manual de instalaci??n</legend>
                            <input className='iamgeInput' type='file' />
                            {productState && <a href={`http://localhost:3000/pdf/${product.data.files[1].name}`}>Haz click para ver el archivo actual</a>}
                        </fieldset>

                        <button className='finish' type='submit'>Finalizar edici??n de producto</button>
                    </div>
                </form>
            </div>
        </>) 
}

export default ProductEdit
