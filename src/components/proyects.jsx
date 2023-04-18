import Proyect from './proyect'
import './proyects.css'
import proyectos from '../proyects.json'


const Proyects = () => {

  console.log('proyectos', proyectos)


  return (
    <div className='container'>
      <div className='projects'>

        {proyectos.proyects?.map((project) => (
          <Proyect url={project.url} image={project.img} title={project.title} />
        ))
        }
      </div>

    </div >
  )
}

export default Proyects