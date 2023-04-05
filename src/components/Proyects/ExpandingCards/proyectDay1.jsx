import { useState } from "react"
import { Link } from "react-router-dom"
import './proyectDay1.css'

const ProyectDay1 = () => {
  const [isActive, setIsActive] = useState('image1')
  const image1 = 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  const image2 = 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
  const image3 = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
  const image4 = 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
  const image5 = 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'


  const changeActive = (imageNumber) => {
    setIsActive(isActive === imageNumber ? 'image1' : imageNumber)
  }

  return (
    <div>
      <div className="containerDay1">
        <div onClick={() => changeActive('image1')}>
          <img src={image1} alt='' className={`image ${isActive === 'image1' ? "active" : "noActive"}`} />
        </div>
        <div onClick={() => changeActive('image2')}>
          <img src={image2} alt='' className={`image ${isActive === 'image2' ? "active" : "noActive"}`} />
        </div>
        <div onClick={() => changeActive('image3')}>
          <img src={image3} alt='' className={`image ${isActive === 'image3' ? "active" : "noActive"}`} />
        </div>
        <div onClick={() => changeActive('image4')}>
          <img src={image4} alt='' className={`image ${isActive === 'image4' ? "active" : "noActive"}`} />
        </div>
        <div onClick={() => changeActive('image5')}>
          <img src={image5} alt='' className={`image ${isActive === 'image5' ? "active" : "noActive"}`} />
        </div>
      </div>
      <Link className="botonDay1" to='/navbar'>Volver</Link>
    </div>
  )

}
export default ProyectDay1