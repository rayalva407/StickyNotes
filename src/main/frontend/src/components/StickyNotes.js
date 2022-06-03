import React, { useState, useEffect } from 'react'
import StickyNote from './StickyNote';

function StickyNotes() {

  const [stickyNotes, setStickyNotes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/notes")
    .then(res => res.json())
    .then(data => setStickyNotes(data))
    .catch(error => console.log('Error: ', error))
  
  }, [stickyNotes])
  
  
  return (
    <div className="d-flex flex-wrap justify-content-center m-5" >
      {stickyNotes.map((note) => <StickyNote title={note.title} body={note.body} id={note.id} key={note.id} />)}
    </div>
  )
}

export default StickyNotes