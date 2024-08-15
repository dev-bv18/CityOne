import React from 'react';
import Hero from './Hero';
import WeatherApp from './Weather';
import Carousel from './Carousel';
import slide1 from './slide1.jpg';
import slide2 from './slide2.jpg';
import slide3 from './slide3.jpg';
import NewCollections from './NewCollections';

const images = [
    slide1, slide2, slide3
];

const Home = () => {
    const mapapi = "AIzaSyD1-Sqt6jbRRC1gTne6KNL2ZklvcWt2lpE";
    return (
        <div>
            <Hero />
            <WeatherApp />
            <Carousel images={images} />
            <NewCollections />
            <iframe
                width="100%"
                height="700px"
                frameBorder="0"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${mapapi}&q=Rourkela,Odisha,India&zoom=14`}
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default Home;
