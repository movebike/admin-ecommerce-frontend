import React from 'react'

export default function Navbar () {
  return (
    <nav className='navbar navbar-expand-lg bg-movebike'>
      <div className='container'>
        <a className='navbar-brand' href='#'>MoveBike</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarText'>
          <span className='navbar-text'>
            Administrar Productos Movebike
          </span>
        </div>
      </div>
    </nav>

  )
}
