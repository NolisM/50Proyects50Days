import { useEffect, useRef } from 'react';
import './proyectDay6.css';

const ProyectDay6 = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => {
      window.removeEventListener("scroll", checkBoxes);
    };
  }, []);

  function checkBoxes() {
    const boxes = boxesRef.current;
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach((box) => {

      const boxTop = box.getBoundingClientRect().top; // medida top del elemento

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }

  return (
    <div className='containerDay6'>
      <div className="box" ref={(el) => (boxesRef.current[0] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[1] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[2] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[3] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[4] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[5] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[6] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[7] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[8] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[9] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[10] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[11] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxesRef.current[12] = el)}>
        <h2>Content</h2>
      </div>
    </div>
  );
}

export default ProyectDay6;


