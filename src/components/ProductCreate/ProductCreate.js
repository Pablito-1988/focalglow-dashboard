import './style-productCreate.css'
import { useState, useEffect, useRef } from 'react'
import ImageAndFiles from './ImageAndFiles'
import { useForm } from './hook/useForm'

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
      button.current.style.display='none'
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
   const initialForm = {
      categoryId:'',
      name:'',
      quantity:'',
      price:'',
      description:'',
      power:'',
      material:[],
      source:'',
      optic:'',
      cct:'',
      dim:''
   }
   const validationForm = (form)=>{
      //errors es lo que va a devolver la funcion validateForm, que es la que se va a setean en setError 
      let errors = {}
      //agrego trim para evitar los espacios en blanco 
     
      switch (form) {
         case form.name:
            if (!form.name.trim()) {
               errors.name = 'Tienes que agregarle un nombre'
            } else if (form.name.trim().length < 3) {
               errors.name = 'Tienes que agregarle un nombre mas largo'
            }
            break;
         case form.quantity:
            if (!form.quantity.trim()) {
               errors.quantity = 'Tienes que agregar una cantidad'
            }
            break;
      
         default:
            break;
      }

      /* if(!form.name.trim()){
         errors.name = 'Tienes que agregarle un nombre'
      }else if(form.name.trim().length < 3){
         errors.name = 'Tienes que agregarle un nombre mas largo'
      }
      if (!form.quantity.trim()) {
         errors.quantity = 'Tienes que agregar una cantidad'
      }
      if (!form.price.trim()) {
         errors.price = 'Tienes que agregarle un precio'
      }
       if (!form.description.trim()) {
         errors.description = 'Tienes que agregarle una descripcion'
       } else if (form.description.trim().length < 20) {
          errors.description = 'Tienes que agregarle una descripcion mas larga'
       } */
      /* if (!form.power ) {
         errors.power = 'Tienes que agregarle una potencia'
      }
      if (!form.material) {
         errors.material = 'Tienes que agregarle un material'
      }
      if (!form.source) {
         errors.source = 'Tienes que agregarle una fuente'
      }
      if (!form.optic) {
         errors.optic = 'Tienes que agregarle una optica'
      }
      if (!form.cct) {
         errors.cct = 'Tienes que agregarle un cct'
      }
      if (!form.dim) {
         errors.dim = 'Tienes que agregarle un dim'
      } */
     
      
      

      return errors
   }
   const { form,
      errors,
      handlerBlur,
      handlerSubmit,
      handlerChange } = useForm(initialForm, validationForm)
   

   return (
      <>
         <h1 className='principalTitle'>Creación de producto</h1>
         <div className='formContainer'>
            <form onSubmit={handlerSubmit} >
               <div className='form_left'>
                  
                  <h2>Detalles y Features del producto</h2>
                  <label className='labelName'>Categoria</label>
                  <select name="categoryId" onChange={handlerChange}>
                     {category.map((e, index) => {
                        return <option key={e.name + index}  value={e.id}>{e.name}</option>
                     })}
                  </select>
                  <label className='labelName'>Nombre del Producto:</label>
                  <input 
                  type='text'
                  value={form.name} 
                  name="name"
                  onChange={handlerChange} 
                  onBlur={handlerBlur} 
                  className='productName' />
                  {errors.name && <span className='errors'>{errors.name}</span> }
                  <label className='labelName'>Cantidad:</label>
                  <input 
                  type='number' 
                  className='number' 
                  min='0'
                  name="quantity"
                  onChange={handlerChange}
                  onBlur={handlerBlur}
                  value={form.quantity}
                  />
                  {errors.quantity && <span className='errors'>{errors.quantity}</span>}
                  <label>Precio unitario base:</label>
                  <input type='number' 
                  className='number' 
                  min='0' 
                  placeholder='$' 
                  name="price"
                  onChange={handlerChange}
                  onBlur={handlerBlur}
                  value={form.price}
                  />
                  {errors.price && <span className='errors'>{errors.price}</span>}
                  <label>Descripción del producto: </label>
                  <textarea type='text' 
                  placeholder="Poné una descripción copada" 
                  name="description"
                  onChange={handlerChange}
                  onBlur={handlerBlur}
                  value={form.description}
                  />
                  {errors.description && <span className='errors'>{errors.description}</span>}
                  {/* <hr className='separador' /> */}
                  <h2 className='featuresTitle'>Features</h2>
                  <div className='powerWrapper'>
                     <label className='title'>Power</label>

                     <select className='powerSelect' name="power" onChange={handlerChange} multiple >
                        {power.map((e, index) => {
                           return <>
                              <option key={e.name + index} type="checkbox" id={e.name} value={e.id} >{e.name}</option>

                           </>
                        })}
                        
                     </select>
                     {errors.power ? <span className='errors'>{errors.power}</span> : ''}
                     
                  </div>
                  <p className='powerInfo'>Recordá que apretando CTRL podrás seleccionar más de una potencia</p>
                  <fieldset className='fuente'>
                     <legend className='title'>Fuente</legend>

                     {source.map((e, index) => {
                        return (
                           <div>
                              <input key={e.name + index} class='radio' type="radio" id={e.name} value={e.id} onChange={handlerChange} name="source" />
                              <label  >{e.name}</label>
                           </div>
                        )
                     })}
                     
                  </fieldset>
                  {errors.source && <span className='errors'>{errors.source}</span>}
                  <fieldset className='fieldset'>
                     <legend className='title'>Material</legend>
                     {materiales.map((e, index) => {
                        return <>
                           <input key={e.name + index} type="checkbox" id={e.name} value={e.id} onChange={handlerChange} name="material" />
                           <label >{e.name}</label><br />
                        </>
                     })}
                  </fieldset>
                  {errors.material && <span className='errors'>{errors.material}</span>}
                  <fieldset className='fieldset'>
                     <legend className='title'>Optica</legend>
                     {optic.map((e, index) => {
                        return <>
                           <input key={e.name + index} type="checkbox" id={e.name} value={e.id} onChange={handlerChange} name="optic" />
                           <label >{e.name}</label><br />
                        </>
                     })}
                  </fieldset>
                  {errors.optic && <span className='errors'>{errors.optic}</span>}
                  <fieldset className='fieldset'>
                     <legend className='title'>CCT</legend>
                     {cct.map((e, index) => {
                        return <>
                           <input key={e.name + index} type="checkbox" id={e.name} value={e.id} onChange={handlerChange} name='cct' />
                           <label >{e.name}</label><br />
                        </>
                     })}
                  </fieldset>
                  {errors.cct && <span className='errors'>{errors.cct}</span>}
                  <fieldset className='fieldset'>
                     <legend className='title'>Dim</legend>
                     {dim.map((e, index) => {
                        return <>
                           <input key={e.name + index} type="checkbox" id={e.name} value={e.id} onChange={handlerChange} name='dim' />
                           <label >{e.name}</label><br />
                        </>
                     })}
                  </fieldset>
                  {errors.dim && <span className='errors'>{errors.dim}</span>}
                  <div ref={button} className='nextButton'>
                     <div onClick={showImageInputs} className='buttonContainer'>
                        <h3  >Siguiente paso</h3>
                     </div>
                  </div>
               </div>
               <div class="form_right">
                  {displayImageInputs && <ImageAndFiles />}
               </div>
            </form>
         </div>
      </>
   )
}

export default ProductCreate


