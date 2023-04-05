import React from 'react'
import Proyects from './proyects'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navBar'>
        <h2>50 Proyectos en 50 Dias</h2>
        <hr />
        <p>50 miniproyectos únicos para mejorar habilidades en React, HTML, CSS y JavaScript</p>
      </div>
      <Proyects />


    </div>
  )
}

export default Navbar

