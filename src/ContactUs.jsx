import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const contact = async () => {
        try {
            const updatedMessage = `${formData.message}`;
            const updatedFormData = { ...formData, message: updatedMessage };
            console.log("Contacting", updatedFormData);
            const response = await fetch('http://localhost:4000/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });
            const responseData = await response.json();
            if (responseData.success) {
                window.location.replace("/CityOne");
                alert("Message sent!!");
            } else {
                alert(responseData.message);
            }
        
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("Failed to submit contact form. Please try again later.");
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
         await contact(); // Call contact function to submit form
    };
    return (
        <div className="container">
            <div className="main-box">
          <h1 class="get">Get in Touch!</h1>
            <form action="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Full Name" value={formData.name} onChange={changeHandler} required />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={formData.email}
                        onChange={changeHandler} placeholder="abc@gmail.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"   value={formData.message}
                        onChange={changeHandler} rows="5" placeholder="Type your message"  required />
                </div>
                {/* <img src="/CityOne/static/media/logo1.28965daf6b68698f707792407b6919d8.svg" id="logo" alt="Logo" class=""  opacity= "0.5" ></img> */}
                <button type="submit" onClick={handleSubmit}>Send Message</button>
            </form>
        </div>
        </div>
    );
}

export default ContactUs;
