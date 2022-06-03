import React from 'react'

function StickyNote({ title, body, id }) {

  const handleClick = () => {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex flex-column text-dark text-center bg-warning m-3 w-25">
      <nav className="navbar p-0 bg-warning">
          <button className="navbar-brand btn btn-link" onClick={handleClick}><i className="bi bi-trash-fill text-danger"></i></button>
      </nav>
      <div className="">
        <p>{title}</p>
      </div>
      <div className='p-2'>
        <p>{body}</p>
      </div>
    </div>
  )
}

export default StickyNote