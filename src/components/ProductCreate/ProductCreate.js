import './style-productCreate.css'
import { useState, useEffect, useRef } from 'react'
import ImageAndFiles from './ImageAndFiles'
/* import { useForm } from './hook/useForm' */
import { Formik, Field, Form } from 'formik';

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



   const button = useRef()
   const [displayImageInputs, setImageInputs] = useState(false)
   function showImageInputs(params) {
      setImageInputs(true)
      button.current.style.display = 'none'
   }



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
            <Formik
               initialValues={{
                  categoryId: '',
                  name: '',
                  quantity: '',
                  price: '',
                  description: '',
                  power: [],
                  source: '',
                  material: [],
                  cct: [],
                  dim: []
               }}
               onSubmit={(values) => {
                  console.log(values)
               }}
            >
               {
                  ({ handleChange, handleSubmit }) => (

                     <Form onSubmit={handleSubmit}>
                        {/* <form onSubmit={handlerSubmit} > */}
                        <div className='form_left'>

                           <h2>Detalles y Features del producto</h2>
                           <label className='labelName'>Categoria</label>
                           <select name="categoryId" onChange={handleChange}>
                              {category.map((e, index) => {
                                 return <option key={e.name + index} value={e.id}>{e.name}</option>
                              })}
                           </select>
                           <label className='labelName'>Nombre del Producto:</label>
                           <input
                              type='text'
                              onChange={handleChange}
                              name="name"
                              id='name'
                              className='productName' />

                           <label className='labelName'>Cantidad:</label>
                           <input
                              type='number'
                              className='number'
                              min='0'
                              name="quantity"
                              id='quantity'
                              onChange={handleChange}
                           />

                           <label>Precio unitario base:</label>
                           <input type='number'
                              className='number'
                              min='0'
                              placeholder='$'
                              name="price"
                              onChange={handleChange}

                           />

                           <label>Descripción del producto: </label>
                           <input type='text'
                              placeholder="Poné una descripción copada"
                              name="description"
                              onChange={handleChange}
                           />

                           {/* <hr className='separador' /> */}
                           <h2 className='featuresTitle'>Features</h2>
                           <div className='powerWrapper'>
                              <label className='title'>Power</label>

                              <select
                              className='powerSelect' 
                              name="power" 
                              onChange={handleChange} 
                              multiple 
                              >
                                 {power.map((e, index) => {
                                    return <>
                                       <option 
                                       key={e.name + index} 
                                       type="checkbox" 
                                       id={e.name} 
                                       value={e.id} 
                                       >{e.name}</option>  
                                    </>
                                 })}
                              </select>
                           </div>
                           <p className='powerInfo'>Recordá que apretando CTRL podrás seleccionar más de una potencia</p>
                           <fieldset className='fuente'>
                              <legend className='title'>Fuente</legend>
                              {source.map((e, index) => {
                                 return (
                                    <div>
                                       <input 
                                       key={e.name + index} 
                                       class='radio' 
                                       onChange={handleChange} 
                                       type="radio" 
                                       id={e.name} 
                                       value={e.id} 
                                       name="source" 
                                       />
                                       <label  >{e.name}</label>
                                    </div>
                                 )
                              })}
                           </fieldset>
                           <fieldset className='fieldset'>
                              <legend className='title'>Material</legend>
                              {materiales.map((e, index) => {
                                 return <>
                                    <input 
                                    key={e.name + index} 
                                    type="checkbox" 
                                    onChange={handleChange} 
                                    id={e.name} 
                                    value={e.id} 
                                    name="material" 
                                    />
                                    <label >{e.name}</label><br />
                                 </>
                              })}
                           </fieldset>
                           <fieldset className='fieldset'>
                              <legend className='title'>Optica</legend>
                              {optic.map((e, index) => {
                                 return <>
                                    <input 
                                    key={e.name + index} 
                                    type="checkbox" 
                                    id={e.name} 
                                    onChange={handleChange} 
                                    value={e.id} 
                                    name="optic" />
                                    <label >{e.name}</label><br />
                                 </>
                              })}
                           </fieldset>

                           <fieldset className='fieldset'>
                              <legend className='title'>CCT</legend>
                              {cct.map((e, index) => {
                                 return <>
                                    <input 
                                    key={e.name + index} 
                                    type="checkbox" 
                                    id={e.name} 
                                    onChange={handleChange} 
                                    value={e.id} 
                                    name='cct' 
                                    />
                                    <label >{e.name}</label><br />
                                 </>
                              })}
                           </fieldset>

                           <fieldset className='fieldset'>
                              <legend className='title'>Dim</legend>
                              {dim.map((e, index) => {
                                 return <>
                                    <input 
                                    key={e.name + index} 
                                    type="checkbox" 
                                    id={e.name} 
                                    onChange={handleChange} 
                                    value={e.id} 
                                    name='dim' 
                                    />
                                    <label >{e.name}</label><br />
                                 </>
                              })}
                           </fieldset>

                           <div ref={button} className='nextButton'>
                              <div onClick={showImageInputs} className='buttonContainer'>
                                 <h3  >Siguiente paso</h3>
                              </div>
                           </div>
                        </div>
                        <div class="form_right">
                           {displayImageInputs && <ImageAndFiles  />}
                        </div>
                     </Form>
                  )}

            </Formik>
         </div>
      </>
   )
}

export default ProductCreate


