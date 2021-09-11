import { useState } from "react"


export const useForm = (initialForm, validateForm)=>{

    const[form,setform]=useState(initialForm)
    //si el error esta vacio se envia el formulario 
    const [errors, setErrors] = useState({})

    console.log(form)
    console.log(errors)
    //detecta el cambio de los valores
    const handlerChange = (e)=>{
        //desestructuro los valores de e.target
        const{ name , value } = e.target
        setform({
            ...form,
            [name]:value,   
        })
    
    }
    /* const handlerCheck = (e) =>{
        const { name, value } = e.target
        setform({
            ...form
            [name]: value
        })
    } */
        
    //aca se hacen las validaciones
    const handlerBlur = (e) => {
        
        handlerChange(e);
        setErrors(validateForm(form))
        
     }

    //aca se maneja el submit
    const handlerSubmit = (e) => {
        e.preventDefault()
        setErrors(validateForm(form))

        /* if(Object.keys(errors).length === 0){
            alert('envio exitoso ')
        }else{
            return alert('el envio fallo ')
        } */
     }
    
    //retorno la data, los errores y los handlers para usar en el formulario 
    return{
        form,
        errors,
        handlerBlur,
        handlerSubmit,
        handlerChange,
        /* handlerCheck, */
    }

}