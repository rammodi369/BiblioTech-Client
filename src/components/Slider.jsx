import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      className="max-h-96"
      // Customize other carousel props as needed
    >
      <div>
        <img src="/images/slide1.jpg" alt="Slide 1" className="object-cover max-h-96" />
      </div>
      <div>
        <img src="/images/slide2.jpg" alt="Slide 2" className="object-cover max-h-96" />
      </div>
      <div>
        <img src="/images/slide3.jpg" alt="Slide 3" className="object-cover max-h-96" />
      </div>
    </Carousel>
  );
};

export default Slider;
