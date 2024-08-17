import React, { useState, useRef, useEffect } from "react";
import "./AboutUs.css";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infoVisibility, setInfoVisibility] = useState(
    Array(5).fill(false) // Initialize with false for each member
  );

  const members = [
    {
      name: "Baibhab Nayak",
      image: "member1.jpg",
      info: "I am a passionate web developer with expertise in React.js and Node.js. I love building interactive and user-friendly web applications.",
      linkedInUrl: "https://www.linkedin.com/in/baibhab-nayak"
    },
    {
      name: "Prateekshya Behera",
      image: "member2.jpg",
      info: "I am a creative designer with a focus on user experience (UX) design. I love creating beautiful and intuitive interfaces that enhance user engagement.",
      linkedInUrl: "https://www.linkedin.com/in/Prateekshya-Behera"
    },
    {
      name: "Samplita Nayak",
      image: "member3.jpg",
      info: "I am a skilled backend developer proficient in Python and Django. I enjoy developing robust and scalable web applications that meet business needs.",
      linkedInUrl: "https://www.linkedin.com/in/Samplita-Nayak"
    },
    {
      name: "Baishali Nayak",
      image: "member4.jpg",
      info: "I am a data analyst with expertise in SQL and data visualization tools. I love uncovering insights from data and using them to improve decision-making.",
      linkedInUrl: "https://www.linkedin.com/in/Baishali-Nayak"
    },
    {
      name: "Sukanya Sahoo",
      image: "member5.jpg",
      info: "I am a project manager with experience in leading software development teams. I am passionate about delivering high-quality projects on time and within budget.",
      linkedInUrl: "https://www.linkedin.com/in/Sukanya-Sahoo"
    },
  ];

  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, members.length]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };

  const toggleInfo = (index) => {
    setInfoVisibility((prevVisibility) => 
      prevVisibility.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  return (
    <div className="aboutus-main-intro">
      <h1 className="aboutus-about">About Us</h1>
      <p className="aboutus-welcome">
        Welcome to <b>CityOne</b>, your premier destination for all things city-related!
      </p>

      <div className="aboutus-carousel">
        <div
          className="aboutus-carousel-track"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {members.map((member, index) => (
            <div className="aboutus-member" key={index}>
              <img src={member.image} alt={member.name} className="aboutus-member-img" />
              <h2 className="aboutus-member-name">{member.name}</h2>
              <button className="aboutus-inner-btn" onClick={() => toggleInfo(index)}>
                {infoVisibility[index] ? "Hide Info" : "Show Info"}
              </button>
              {infoVisibility[index] && (
                <div className="aboutus-info-container">
                  <p className="aboutus-info">{member.info}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="aboutus-carousel-controls">
          <button className="aboutus-carousel-btn" onClick={handlePrevClick}>&lt;</button>
          <button className="aboutus-carousel-btn" onClick={handleNextClick}>&gt;</button>
        </div>
      </div>

      <div className="aboutus-the-team">
        <p>
          We're a team of students united by our passion for technology and innovation. Individually, we're accomplished in our own right, with each member bringing a unique combination of skills, experience, and perspectives to the table. Whether it's web development, UX design, backend development, data analysis, or project management, we're all dedicated to excellence in our respective areas. But what makes us truly special is our ability to come together as a cohesive unit, leveraging our collective strengths to achieve far more than we could alone. We're a team of equals, driven by a shared enthusiasm for learning, growth, and making a meaningful impact.
        </p>
      </div>

      <div className="aboutus-linkedin-profiles">
        <h2 className="aboutus-linkedin-title">Connect with Us on LinkedIn</h2>
        <ul className="aboutus-links-list">
          {members.map((member) => (
            <li className="aboutus-link-item" key={member.name}>
              <a
                className="aboutus-link"
                href={member.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer">
                {member.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
