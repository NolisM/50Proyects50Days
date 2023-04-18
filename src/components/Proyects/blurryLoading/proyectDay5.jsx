import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import './proyectDay5.css'

const ProyectDay5 = () => {
  const [blurValue, setBlurValue] = useState(30);
  const [opacityNumber, setOpacityNumber] = useState(1)
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const intervalImage = setInterval(() => {
      if (blurValue > 0) {
        setBlurValue(prevLoading => prevLoading - 0.4);
      }
    }, 25);
    const intervalNumber = setInterval(() => {
      if (opacityNumber > 0) {
        console.log(opacityNumber)
        setOpacityNumber(prevOpacity => prevOpacity.toFixed(2) - 0.01);
      }

    }, 25)
    return () => {
      clearInterval(intervalImage);
      clearInterval(intervalNumber);
    }
  }, [blurValue, opacityNumber]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (loading < 100) {
        setLoading(load => load + 1)
        setBlurValue(prevBlur => prevBlur + 0.1);
      }
    }, 29);
    return () => clearInterval(interval);
  }, [loading])


  return (
    <div>
      <section
        className="imageDay5"
        style={{
          filter: `blur(${blurValue}px)`,
          transition: 'opacity 3s ease-in-out'
        }}
      />
      <div
        className="loading"
        style={{
          filter: `blur(${opacityNumber}px)`,
          transition: 'opacity 3s ease-in-out',
          opacity: Math.max(1 - loading / 20, 0)
        }}
      >{loading}%
      </div>
      <Link className="botonDay5" to='/navbar'>Volver</Link>
    </div>
  );
};

export default ProyectDay5