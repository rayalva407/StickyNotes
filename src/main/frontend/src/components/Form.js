import React, { useState } from 'react'

function Form() {

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {title, body}
    

    fetch("http://localhost:8080/notes", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    .catch(error => console.log('Error: ', error))
    setTitle("")
    setBody("")
  }



  return (
    <div className="container-fluid color-white text-center text-warning bg-dark">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className='mb-3'>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="title" className="form-control" placeholder='Type the title of your note here' required/>
        </div>

        <div className="mb-4">
          <label htmlFor="body" className='mb-3'>Body</label>
          <input type="text" value={body} onChange={(e) => setBody(e.target.value)} name="body" className="form-control" placeholder='Type the body of your note here' required/>
        </div>
        
        <input type="submit" className='btn btn-outline-warning mb-3' value="Stick It!" />
      </form>
    </div>
  )
}

export default Form