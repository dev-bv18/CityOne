import React from "react";
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className="container">
            <div className="main-box">
          <h1 class="get">Get in Touch!</h1>
            <form action="POST">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Full Name"required />
                    
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email"placeholder="abc@gmail.com" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows="5" placeholder="Type your message"  required />
                </div>
                {/* <img src="/CityOne/static/media/logo1.28965daf6b68698f707792407b6919d8.svg" id="logo" alt="Logo" class=""  opacity= "0.5" ></img> */}
                <button type="submit">Send Message</button>
            </form>
        </div>
        </div>
    );
}

export default ContactUs;
