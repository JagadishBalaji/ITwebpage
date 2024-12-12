import React from 'react';
import '../styles/About.css';
import AboutImage from '../Image/Aboutgif.gif';


const About = () => {
  return (
    <section className="about">
      <div className="about-content">
       
        <p>
          We are a leading IT solutions provider, delivering innovative and cutting-edge 
          services to our clients worldwide. Our expertise spans across multiple domains, 
          ensuring excellence and commitment in everything we do.
        </p>
      </div>
      <div className="about-image">
      <img src={AboutImage} alt="About Us" />
      </div>
    </section>
  );
};

export default About;
