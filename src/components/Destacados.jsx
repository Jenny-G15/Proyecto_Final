import React from "react";
import astro from "../img/astro.jpeg"
import ave from "../img/ave.jpeg"
import chorreador from "../img/chorreador.jpeg"
import Carousel from 'react-bootstrap/Carousel';
import "../styles/home.css";

function Destacados() {
  return (
    <Carousel id="containerCarrusel"data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ave}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={astro}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chorreador}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Destacados;