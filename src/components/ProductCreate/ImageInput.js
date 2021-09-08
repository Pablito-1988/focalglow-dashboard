import {useState, useEffect} from 'react'

function ImageInput(params) {
    const[image,setImage] = useState('')

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
            <input type='file'  onChange={imageHandler}/>
            <h4>Preview:</h4>
            <img className='imagePreview' src={image} />
        </>
    )
    
}

export default ImageInput