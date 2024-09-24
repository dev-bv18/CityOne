import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isLoading, setIsLoading] = useState(false); // Loading state to prevent multiple submissions
    const [formStatus, setFormStatus] = useState(""); // Status message to show response

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const contact = async () => {
        try {
            setIsLoading(true); // Set loading state to true
            const updatedMessage = `${formData.message}`;
            const updatedFormData = { ...formData, message: updatedMessage };

            console.log("Contacting", updatedFormData);

            const response = await fetch('https://cityone-backend.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedFormData),
            });

            const responseData = await response.json();

            if (response.ok && responseData.success) {
                setFormStatus("Message sent successfully!");
                alert("Message sent!!");
                // Redirect or reset form after success
                setFormData({
                    name: "",
                    email: "",
                    message: ""
                });
                window.location.replace("/CityOne"); // Redirect if needed
            } else {
                setFormStatus(`Error: ${responseData.message}`);
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setFormStatus("Failed to submit contact form. Please try again later.");
        } finally {
            setIsLoading(false); // Reset loading state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        if (!isLoading) {
            await contact(); // Call contact function to submit form
        }
    };

    return (
        <div className="container">
            <div className="main-box">
                <h1 className="get">Get in Touch!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Full Name" 
                            value={formData.name} 
                            onChange={changeHandler} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={formData.email}
                            onChange={changeHandler} 
                            placeholder="abc@gmail.com" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            name="message" 
                            id="message"   
                            value={formData.message}
                            onChange={changeHandler} 
                            rows="5" 
                            placeholder="Type your message"  
                            required 
                        />
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {formStatus && <div className="status-message">{formStatus}</div>}
            </div>
        </div>
    );
}

export default ContactUs;
