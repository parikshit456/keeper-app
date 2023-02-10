import './App.css';
import Header from './components/Header';
import Notes from './components/Notes';
import Footer from './components/Footer';
import AddNote from './components/AddNote';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [notesList,setNotesList] = useState([]);
  

  const addNoteHandler = (title,noteDetail) =>{
    console.log(noteDetail);

    setNotesList([...notesList,{
      id: uuidv4(),
      title:title,
      content: noteDetail
    }])
  }

  const deleteNoteHandler = (id)=>{
    const newNotesList = notesList.filter((note) => note.id!==id)
    setNotesList(newNotesList)
  }


  return (
    <div className="App">
      <Header />
      <AddNote addNoteHandler={addNoteHandler}/>
      {notesList.map((note) => <Notes note={note} deleteNoteHandler={deleteNoteHandler}/>)}
      
      <Footer />
    </div>
  );
}

export default App;
