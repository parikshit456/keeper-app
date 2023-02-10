import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const Notes = (props) => {
  var content = props.note.content;
  console.log(content)
  return (
    <div className='notes'>
        <h2>{props.note.title}</h2>
        <p>{content}</p>
        <button onClick={()=> props.deleteNoteHandler(props.note.id)}><Icon.Trash /></button>

    </div>
  )
}

export default Notes