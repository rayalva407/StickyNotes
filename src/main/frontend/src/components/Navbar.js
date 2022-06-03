import React from 'react'

function Navbar({setShowForm, formSwitch}) {

  const handleClick = (e) => {
    setShowForm(!formSwitch)
  }

  return (
    <nav className='navbar navbar-expand-lg bg-dark '>
        <div className="container-fluid">
        <div className="navbar-brand text-warning"><i className="bi bi-stickies-fill navbar-brand text-warning"></i>Sticky Notes</div>
        {!formSwitch && <button type="button" className="btn btn-outline-warning" onClick={handleClick}><i className="bi bi-plus-lg"> Add a Sticky Note</i></button>}
        {formSwitch && <button type="button" className="btn btn-outline-warning" onClick={handleClick}><i className="bi bi-dash">Close</i></button>}
        </div>
      </nav>
  )
}

export default Navbar