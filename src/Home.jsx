import React from 'react';
import Hero from './Hero';
import WeatherApp from './Weather';
import Carousel from './Carousel';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
const images = [
    slide1,slide2,slide3
   
     ];
const Home = () => {
    return (<div>
         <Hero/>
         <WeatherApp/>
         <Carousel images={images}/>
    </div>
      

    );
};

export default Home;
