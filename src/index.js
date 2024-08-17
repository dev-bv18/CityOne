import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Navbar from './Navbar';
import Footer from './Footer';
import ContactUs from './ContactUs';
import ServiceCategory from './ServiceCategory'; 
import AboutUs from './AboutUs';
import ServiceContextProvider from './ServiceContext';// Updated to reflect the new name
import SearchResults from './SearchResults';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <ServiceContextProvider>
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/CityOne" element={<Home />} />
      <Route path="/education" element={<ServiceCategory category="education" />} />
      <Route path="/hospital" element={<ServiceCategory category="hospital" />} />
      <Route path="/clinics" element={<ServiceCategory category="clinics" />} />
      <Route path="/police" element={<ServiceCategory category="police" />} />
      <Route path="/transport" element={<ServiceCategory category="transport" />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path='/about' element={<AboutUs/>}/>
      <Route path="/searchresults" element={<SearchResults/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
 </ServiceContextProvider>
);

reportWebVitals();
