import './style-productCreate.css'
import { useState, useEffect } from 'react'

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


        <div className='formContainer'>
            <form>
                <div className='form_left'>
                    <label className='labelName'>Category</label>
                    <select>
                        {category.map((e,index)=>{
                            return  <option key ={e.name+index}>{e.name}</option>
                        })}
                    </select>
                    <label className='labelName'>Nombre del Producto</label>
                    <input type='text' className='productName' />
                    <label className='labelName'>Cantidad</label>
                    <input type='number' className='number' min='0' />
                    <label>Precio</label>
                    <input type='number' className='number' min='0' />
                    <label>Descripción del producto</label>
                    <textarea type='text' />
                    <hr className='separador' />
                    <h3 className='featuresTitle'>Features</h3>

                    <fieldset className='fuente'>
                        <legend className='title'>Fuente</legend>
                        {source.map((e, index) => {
                            return <>
                                <input key={e.name + index} type="radio" id={e.name} name={e.name} />
                                <label  >{e.name}</label><br />
                            </>
                        })}
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className='title'>Material</legend>
                        {materiales.map((e, index) => {
                            return <>
                                <input key={e.name + index} type="checkbox" id={e.name} name={e.name} />
                                <label >{e.name}</label><br />
                            </>
                        })}
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className='title'>Optica</legend>
                        {optic.map((e, index) => {
                            return <>
                                <input key={e.name + index} type="checkbox" id={e.name} name={e.name} />
                                <label >{e.name}</label><br />
                            </>
                        })}
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className='title'>CCT</legend>
                        {cct.map((e, index) => {
                            return <>
                                <input key={e.name + index} type="checkbox" id={e.name} name={e.name} />
                                <label >{e.name}</label><br />
                            </>
                        })}
                    </fieldset>
                    <fieldset className='fieldset'>
                        <legend className='title'>Dim</legend>
                        {dim.map((e, index) => {
                            return <>
                                <input key={e.name + index} type="checkbox" id={e.name} name={e.name} />
                                <label >{e.name}</label><br />
                            </>
                        })}
                    </fieldset>

                </div>
                <div class="form_right">

                    <p>hola</p>
                 <button type='reset'>reset </button>  
                </div>
                
            </form>

        </div>


    )
}

export default ProductCreate


