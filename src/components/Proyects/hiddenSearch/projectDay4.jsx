import { useState } from "react"
import { Link } from "react-router-dom"
import './projectDay4.css'



const ProjectDay4 = () => {
  const [search, setSearch] = useState(false)
  return (
    <div className="containerDay4">
      <div className="contentDay4">
        <input className={search ? 'inputDay4 inputVisible' : 'inputDay4'} type="text" placeholder="Search..."></input>
        <button className="btnDay4" onClick={() => { setSearch(!search) }}>
          <i class="fas fa-search"></i>
        </button>
      </div>
      <Link className="botonDay4" to='/navbar'>Volver</Link>
    </div>
  )
}

export default ProjectDay4