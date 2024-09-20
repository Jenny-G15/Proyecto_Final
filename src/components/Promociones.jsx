import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import dino from "../img/dino.jpeg";
import coneja from "../img/coneja.jpeg";
import principito from "../img/principito.jpeg";
import "../styles/home.css";


function Promociones() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id='containerCarrusel'>
        <Carousel activeIndex={index} onSelect={handleSelect} className="my-carousel">
    <Carousel.Item>
      <img className='d-block w-100' src={dino} alt="First slide" />
      <Carousel.Caption className="text-center">
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100' src={coneja} alt="Second slide" />
      <Carousel.Caption className="text-center">
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className='d-block w-100' src={principito} alt="Third slide" />
      <Carousel.Caption className="text-center">
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>

  
  );
}

export default Promociones;