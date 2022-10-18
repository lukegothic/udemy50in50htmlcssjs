import './C01.css';
import fondo1 from './assets/fondo1.jpg';
import fondo2 from './assets/fondo2.jpg';
import fondo3 from './assets/fondo3.jpg';
import fondo4 from './assets/fondo4.jpg';
import fondo5 from './assets/fondo5.jpg';
import { useState } from 'react';

const titles = {
  0: "La Galaxia",
  1: "La Montaña",
  2: "El Otoño",
  3: "La Motosierra",
  4: "La Inquietud",
}

export const C01 = () => {
  const [fondo, setFondo] = useState(fondo1);
  return (<div>
    <h4>Hola soy challenge 1</h4>
    <div className="carousel">
      { [fondo1, fondo2, fondo3, fondo4, fondo5].map((f, i) => 
        <div className={`card ${f === fondo ? "selected": ""}`} style={{background:`url(${f})`}} onClick={() => setFondo(f)}><span>{titles[i]}</span></div>)
      }
    </div>
  </div>);
}