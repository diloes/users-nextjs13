import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-body-tertiary bg-dark'>
      <div className='container-fluid container'>
        <Link className='navbar-brand' href='/'>
          Usuarios - NextJS 13
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link className='nav-link' href='/about'>
                Sobre mí
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' href='/services'>
                Servicios
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
