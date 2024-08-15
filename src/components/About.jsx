import React from 'react';
import aboutImage from '../assets/about.jpg';

const About = () => (
  <div className="page-container">
    <div className="page-content about-content">
      <p className="about-description">
        We are passionate about providing the best pizza experience with high-quality ingredients and exceptional service.
      </p>
      <img src={aboutImage} alt="About Us" className="about-image" />
    </div>
  </div>
);

export default About;
