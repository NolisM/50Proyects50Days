import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <div>
      <div>
        <h1>Reto de <hr />50 Proyectos en 50 dias</h1>
      </div>
      <Link to='/Navbar'>
        <button>Empecemos!!!</button>
      </Link>
    </div>
  )
}

export default LandingPage