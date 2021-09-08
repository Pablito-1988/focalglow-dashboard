import './style-productCreate.css'
import { useState, useEffect } from 'react'
import ImageInput from './ImageInput'

function ProductCreate(params) {
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
            <h1 className='principalTitle'>Creación de producto</h1>
            <div className='formContainer'>
                <form>
                    <div className='form_left'>
                        <label className='labelName'>Category</label>
                        <select>
                            {category.map((e, index) => {
                                return <option key={e.name + index} value={e.id}>{e.name}</option>
                            })}
                        </select>
                        <label className='labelName'>Nombre del Producto:</label>
                        <input type='text' className='productName' />
                        <label className='labelName'>Cantidad:</label>
                        <input type='number' className='number' min='0' />
                        <label>Precio unitario base:</label>
                        <input type='number' className='number' min='0' />
                        <label>Descripción del producto: </label>
                        <textarea type='text' />
                        {/* <hr className='separador' /> */}
                        <h2 className='featuresTitle'>Features</h2>

                        <label className='title'>Power</label>
                        <select className='powerSelect' multiple>
                            {power.map((e, index) => {
                                return <>
                                    <option key={e.name + index} type="checkbox" id={e.name} value={e.id} name={e.name} >{e.name}</option>

                                </>
                            })}
                        </select>
                        <fieldset className='fuente'>
                            <legend className='title'>Fuente</legend>
                            {source.map((e, index) => {
                                return <>

                                    <input key={e.name + index} class='radio'type="radio" id={e.name} value={e.id} name={e.name} />
                                    <label  >{e.name}</label><br />
                                </>
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
                    <div class="form_right">
                            <h2>Imagenes y archivos del producto</h2>
                        <fieldset className='imageFieldset'>
                            <legend>Imagen principal</legend>
                            <ImageInput />
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Dimenciones del producto</legend>
                            <ImageInput/>
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Slider</legend>
                            <input multiple type='file' />
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Hoja tecnica</legend>
                            <input type='file' />
                        </fieldset>
                        <fieldset className='imageFieldset'>
                            <legend>Manual de instalación</legend>
                            <input type='file' />
                        </fieldset>
                        

                    </div>

                </form>

            </div>
        </>

    )
}

export default ProductCreate


