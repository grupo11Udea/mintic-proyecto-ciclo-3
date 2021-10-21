import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideImage1 from '../../assets/images/Logo1.jpg';
import slideImage2 from '../../assets/images/logo2.jpg';
import slideImage3 from '../../assets/images/ABSTRACT_BACKGROUND_01.jpg';
import Navbar from './NavBar';


import './home.css'

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Carousel
        interval="3000"
      >
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={slideImage1}
            alt="First slide"

          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={slideImage2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="d-block w-100"
            src={slideImage3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Home
