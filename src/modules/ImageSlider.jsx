    // src/ImageSlider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../src/App.css';

const images = [
  process.env.PUBLIC_URL + '/images/miche.jpg',
  process.env.PUBLIC_URL + '/images/tortasimg.jpg',
  process.env.PUBLIC_URL + '/images/carroimg.jpg',
  process.env.PUBLIC_URL + '/images/familypack.jpg',
  process.env.PUBLIC_URL + '/images/mkt.jpg',
];

const ImageSlider = () => {
  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={image}
            alt={`Slide ${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;