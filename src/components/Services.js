import React from 'react';
import '../styles/Services.css';
import webdev from '../Image/webdev.png'; // Import the image from the src/images folder
import mobapp from '../Image/mobapp.png'; // Import the image from the src/images folder
import cloud from '../Image/cloud.png'; // Import the image from the src/images folder
import data from '../Image/Data.png'; // Import the image from the src/images folder


const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <div className="service-icon">
            {/* Replace with actual vector images or SVGs */}
            
            <img src={webdev} alt="web dev" />
          </div>
          <h3>Web Development</h3>
          <p>
            We build high-quality, responsive websites using the latest technologies 
            to ensure a seamless user experience across devices.
          </p>
        </div>

        <div className="service-item">
          <div className="service-icon">
          <img src={mobapp} alt="mobapp" />
          </div>
          <h3>Mobile App Development</h3>
          <p>
            We design and develop intuitive mobile applications for both iOS and Android 
            platforms that provide exceptional performance and functionality.
          </p>
        </div>

        <div className="service-item">
          <div className="service-icon">
          <img src={cloud} alt="cloud computing" />
          </div>
          <h3>Cloud Solutions</h3>
          <p>
            Our cloud-based services offer scalable and secure infrastructure solutions 
            to help businesses thrive in a digital-first world.
          </p>
        </div>

        <div className="service-item">
          <div className="service-icon">
          <img src={data} alt="Data Ana" />
          </div>
          <h3>Data Analytics</h3>
          <p>
            We leverage data-driven insights to help businesses make informed decisions 
            and improve operational efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
