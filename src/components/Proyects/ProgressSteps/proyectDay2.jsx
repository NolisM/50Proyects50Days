import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { useState } from "react"
import './proyectDay2.css'

const ProyectDay2 = () => {
    const [isActive, setIsActive] = useState(1);
    console.log(isActive)

    useEffect(() => {
        console.log('isActive', isActive)
    }, [isActive])


    const handleButtonClick = (change) => {

        if (change === 'next' && isActive < 4 && isActive >= 1) {
            setIsActive(isActive + 1)
        } else if (change === 'prev' && isActive > 1) {
            setIsActive(isActive - 1)
        }
    }

    return (
        <div className="containerDay2">
            <div className="progress-container">
                <div className={`circleStep ${isActive >= 1 ? 'isActive' : ''}`}>1</div>
                <div className={`progress ${isActive >= 2 ? 'progressActive' : 'progressNoActive'}`} style={{ width: '110px', left: '0' }}></div>
                <div className={`circleStep ${isActive >= 2 ? 'isActive' : ''}`}>2</div>
                <div className={`progress ${isActive >= 3 ? 'progressActive2' : 'progressNoActive'}`} style={{ width: '110px', left: '0' }}></div>
                <div className={`circleStep ${isActive >= 3 ? 'isActive' : ''}`}>3</div>
                <div className={`progress ${isActive === 4 ? 'progressActive3' : 'progressNoActive'}`} style={{ width: '110px', }}></div>
                <div className={`circleStep ${isActive === 4 ? 'isActive' : ''}`}>4</div>

            </div>
            <div className="container-btn">
                <button className={`btn ${isActive >= 2 ? 'btnActive' : ''}`} onClick={() => handleButtonClick('prev')}>Prev</button>
                <button className={`btn ${isActive >= 1 && isActive < 4 ? 'btnActive' : ''}`} onClick={() => handleButtonClick('next')}>Next</button>
            </div>
            <Link className="botonDay2" to='/navbar'>Volver</Link>
        </div>
    )
}
export default ProyectDay2