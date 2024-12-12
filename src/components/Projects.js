import React from 'react';
import '../styles/Projects.css';
import EcommerceImage from '../Image/ecommerce.png';
import ChatbotImage from '../Image/chatbot.png';
import DashboardImage from '../Image/dashboard.png';


const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A scalable e-commerce platform with seamless payment integration and responsive design.',
      image: EcommerceImage, // Replace with the actual path
    },
    {
      title: 'AI Chatbot',
      description: 'An intelligent chatbot leveraging AI to enhance customer support and engagement.',
      image: ChatbotImage, // Replace with the actual path
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'A comprehensive dashboard for visualizing key business metrics and insights.',
      image: DashboardImage, // Replace with the actual path
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Our Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
