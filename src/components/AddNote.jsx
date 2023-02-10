import React, { useState } from 'react'

const AddNote = (props) => {

    const [title,setTitle] = useState("");
    const [note,setNote] = useState("");
    const [isPressed, setIsPressed] = useState(false)


    const noteHandler = () =>{
        if(note==="" || title===""){
            alert('Please enter the empty field')
        }else{
            props.addNoteHandler(title,note)
            setTitle("");
            setNote("")
        }
       
    }

    function titleChangeHandler (event){
setTitle(event.target.value)

    }

    function noteChangeHandler (event){
        setNote(event.target.value)
    }

    function inputFocusHandler(){
        setIsPressed(true);
    }
  return (
    <div className={isPressed ? 'add-note' : 'add-note-text-area'}>
        <input className='title-input' value={title} onChange={titleChangeHandler} type="text" placeholder='Title'></input>
        <textarea type="text-area" value={note} onChange={noteChangeHandler} onFocus={inputFocusHandler} className='text-area' placeholder='Take a note...' ></textarea>
        <button onClick={noteHandler}>+</button>
    </div>
  )
}

export default AddNote