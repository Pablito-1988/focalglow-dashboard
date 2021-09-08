import {useState} from 'react'
import imageDefault from'./default-img.JPG'

function ImageInput(params) {
    const [image, setImage] = useState(imageDefault)

    let imageHandler = (e) =>{
        const reader = new FileReader();
        reader.onload = () =>{
            if(reader.readyState === 2){
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