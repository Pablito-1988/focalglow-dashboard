

function ImageInput(props) {
        
    return (
        <>
            <input type='file' className='iamgeInput'></input>
            <h4>Preview:</h4>
            <img className='imagePreview' src={`http://localhost:3000/img/${props.data}`}  alt='ImageFromForm'></img>
        </>
    )
    
}

export default ImageInput