import { useState } from 'react'
import './projectDay7.css'


const ProjectDay7 = () => {
  const [hoverLeft, setHoverLeft] = useState('')
  const [hoverRight, setHoverRight] = useState('')

  const expandingLeft = () => {
    setHoverLeft('hoverLeft')
    setHoverRight('removeHoverRight')
  }

  const expandingRight = () => {
    setHoverRight('hoverRight')
    setHoverLeft('removeHoverLeft')
  }

  const clearClass = () => {
    setHoverRight('')
    setHoverLeft('')
  }

  return (
    <div className='containerDay7'>
      <div className={`splitLeft ${hoverLeft}`} onMouseOver={expandingLeft} onMouseOut={clearClass}>
        <h1>Playstation 5</h1>
        <a href="#" className="btnProjectDay7">Buy Now</a>
      </div>
      <div className={`splitRight ${hoverRight}`} onMouseOver={expandingRight} onMouseOut={clearClass}>
        <h1>XBox Series X</h1>
        <a href="#" className="btnProjectDay7">Buy Now</a>

      </div>
    </div>
  )
}
export default ProjectDay7