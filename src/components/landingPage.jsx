import React from 'react';
import { Link } from 'react-router-dom';
import './landingPage.css'


const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <div>
        <h1>Retos diarios</h1>
        <h1>50 Proyectos en 50 dias</h1>
      </div>
      <Link to='/Navbar'>
        <button className='btnLanding'>Empecemos!!!</button>
      </Link>
    </div>
  )
}

export default LandingPage