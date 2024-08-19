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
import ServiceContextProvider from './ServiceContext'; // Updated to reflect the new name
import SearchResults from './SearchResults';
import Product from './Product';
import Service from './Service';
import Notices from './Notices'; // Import Notices if needed
import Parks from './Park';
import Places from './Places';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ServiceContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        
      <Route path="/places" element={<Places/>}/>
        <Route path="/parks" element={<Parks/>}/>
        <Route path="/CityOne" element={<Home />} />
        <Route path="/education" element={<ServiceCategory category="education" />} />
        <Route path="/hospital" element={<ServiceCategory category="hospital" />} />
        <Route path="/clinics" element={<ServiceCategory category="clinics" />} />
        <Route path="/police" element={<ServiceCategory category="police" />} />
        <Route path="/transport" element={<ServiceCategory category="transport" />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/notice/:id" element={<Product />} />
        <Route path="/service/:id" element={<Service />} />
       
        <Route path='/about' element={<AboutUs />} />
        <Route path="/searchresults" element={<SearchResults />} />
        <Route path="/notices" element={<Notices />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ServiceContextProvider>
);

reportWebVitals();
