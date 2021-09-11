import './style-productCreate.css'
import { useState, useEffect, useRef } from 'react'
import ImageAndFiles from './ImageAndFiles'
/* import { useForm } from './hook/useForm' */
import { Formik, Form ,ErrorMessage} from 'formik';
import imageDefault from './default-img.JPG'

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

   
      //seteo  un estado para alamacenar la imagen del imput
      const [image, setImage] = useState(imageDefault)
      //creo el evento que va a tener el input
      let imageHandler = (e) => {
         //seteo un nuevo reader que permite acceder a los archivos de los inputs 
         const reader = new FileReader();
         //en la funcion onload se coloca lo que quiero que se haga con la info 
         reader.onload = () => {
            //aca si el estado es igual a 2 significa que el FileReader completo la operacion y tiene la informacion 
            if (reader.readyState === 2) {
               //se setea el estado con el resultado del fileReader
               setImage(reader.result)
            }
         }
         
         reader.readAsDataURL(e.target.files[0])
      }

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
                  source: [],
                  material: [],
                  cct: [],
                  dim: [],
                  optic:[],
                  mainImg:{},
                  dataSheet:'',
                  installSheet: ''
               }}

               
               validate={(values)=>{
                  const errors = {}
                  if(!values.name){
                     errors.name = 'Debes agregar un nombre para el producto'
                  }else if (values.name.length<3){
                     errors.name = 'Debes agregar un nombr mas largo para el producto'
                  }
                  if (!values.quantity){
                     errors.quantity ='Debes agregar una cantidad para el producto'
                  }
                  if (!values.price) {
                     errors.price = 'Debes agregar un precio  para el producto'
                  }
                  if (!values.description) {
                     errors.description = 'Debes agregar una descripción para el producto'
                  } else if (values.description.length < 3) {
                     errors.description = 'Debes agregar una descripcion  mas larga para el producto'
                  }
                  if (values.source.length === 0) {
                     errors.source = 'Debes agregar una Fuente  para el producto'
                  }
                  if (values.power.length === 0) {
                     errors.power = 'Debes agregar por lo menos una Potencia  para el producto'
                  }
                  if (values.material.length === 0) {
                     errors.material = 'Debes agregar por lo menos un Material para el producto'
                  }
                  if (values.cct.length === 0) {
                     errors.cct = 'Debes agregar por lo menos un CCT para el producto'
                  }
                  if (values.dim.length === 0) {
                     errors.dim = 'Debes agregar por lo menos un DIM para el producto'
                  }
                  if (values.optic.length === 0) {
                     errors.optic = 'Debes agregar por lo menos una OPTICA para el producto'
                  }
                  if (!values.dataSheet) {
                     errors.dataSheet = 'Debes agregar un archivo'
                  }
                  if (!values.installSheet) {
                     errors.installSheet = 'Debes agregar un archivo'
                  }
                  console.log(errors)
                  return errors
               }}
               onSubmit={(values) => {
                  console.log(values)
                  
               }}
               
            >
               {
                  ({ handleChange, setFieldValue}) => (

                     <Form >
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
                           <ErrorMessage name ='name' className='errors' component='span'/>
                           <label className='labelName'>Cantidad:</label>
                           <input
                              type='number'
                              className='number'
                              min='0'
                              name="quantity"
                              id='quantity'
                              onChange={handleChange}
                           />
                           <ErrorMessage name='quantity' className='errors' component='span' />
                           <label>Precio unitario base:</label>
                           <input type='number'
                              className='number'
                              min='0'
                              placeholder='$'
                              name="price"
                              onChange={handleChange}

                           />
                           <ErrorMessage name='quantity' className='errors' component='span' />
                           <label>Descripción del producto: </label>
                           <textarea type='text'
                              placeholder="Poné una descripción copada"
                              name="description"
                              onChange={handleChange}
                           />
                           <ErrorMessage name='description' className='errors' component='span' />
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
                              <ErrorMessage name='power' className='errors' component='span' />
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
                           <ErrorMessage name='source' className='errors' component='span' />
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
                           <ErrorMessage name='material' className='errors' component='span' />
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
                           <ErrorMessage name='optic' className='errors' component='span' />
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
                           <ErrorMessage name='cct' className='errors' component='span' />
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
                           <ErrorMessage name='dim' className='errors' component='span' />
                           <div ref={button} className='nextButton'>
                              <div onClick={showImageInputs} className='buttonContainer'>
                                 <h3  >Siguiente paso</h3>
                              </div>
                           </div>
                        </div>
                        <div class="form_right">
                           <h2>Imagenes y archivos del producto</h2>
                           <fieldset className='imageFieldset'>
                              <legend>Imagen principal</legend>
                              <input type='file' className='iamgeInput' onChange={imageHandler}></input>
                              <h4>Preview:</h4>
                              <img className='imagePreview' src={image} alt='ImageFromForm'></img>
                           </fieldset>
                           <fieldset className='imageFieldset'>
                              <legend>Dimenciones del producto</legend>
                              <input type='file' className='iamgeInput' onChange={imageHandler}></input>
                              <h4>Preview:</h4>
                              <img className='imagePreview' src={image} alt='ImageFromForm'></img>
                           </fieldset>
                           <fieldset className='sliderImage'>
                              <legend>Slider</legend>
                              <input className='iamgeInput ' name='slider' id='slider' multiple type='file' 
                               />
                              <p className='sliderInfo'>Apretando CTRL podrás seleccionar más de una imagen</p>
                           </fieldset>
                           <fieldset className='imageFieldset'>
                              <legend>Hoja tecnica</legend>
                              <input className='iamgeInput' name='dataSheet' onChange={(event) => {
                                 setFieldValue("dataSheet", event.target.files[0]);
                              }}  type='file' />
                           </fieldset>
                           <ErrorMessage name='dataSheet' className='errors' component='span' />
                           <fieldset className='imageFieldset'>
                              <legend>Manual de instalación</legend>
                              <input className='iamgeInput' name='installSheet' onChange={(event) => {
                                 setFieldValue("installSheet", event.target.files[0]);
                              }} type='file' />
                           </fieldset>
                           <ErrorMessage name='installSheet' className='errors' component='span' />
                           <button className='finish' type='submit'>Finalizar creación de producto</button>
                        </div>
                     </Form>
                  )}

            </Formik>
         </div>
      </>
   )
}

export default ProductCreate


