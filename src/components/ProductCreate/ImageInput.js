import {useState} from 'react'
import imageDefault from'./default-img.JPG'

function ImageInput(params) {
    //seteo  un estado para alamacenar la imagen del imput
    const [image, setImage] = useState(imageDefault)
    //creo el evento que va a tener el input
    let imageHandler = (e) =>{
        //seteo un nuevo reader que permite acceder a los archivos de los inputs 
        const reader = new FileReader();
        //en la funcion onload se coloca lo que quiero que se haga con la info 
        reader.onload = () =>{
            //aca si el estado es igual a 2 significa que el FileReader completo la operacion y tiene la informacion 
            if(reader.readyState === 2){
                //se setea el estado con el resultado del fileReader
                    setImage(reader.result)
            }
        }
        reader.readAsDataURL(e.target.files[0])
    }


    return (
        <>
            <input type='file' className='iamgeInput'  onChange={imageHandler}></input>
            <h4>Preview:</h4>
            <img className='imagePreview' src={image} alt='ImageFromForm'></img>
        </>
    )
    
}

export default ImageInput