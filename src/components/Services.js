import React from 'react';
import { Palette, Code, TrendingUp, Camera } from 'lucide-react';
import './Services.css';

const Services = () => {
  const serviceData = [
    {
      icon: <Palette size={40} />,
      title: 'UI/UX Design',
      description: 'Create intuitive and beautiful user interfaces with focus on user experience and modern design principles.'
    },
    {
      icon: <Code size={40} />,
      title: 'Web Development',
      description: 'Build responsive and performant websites using modern technologies like React, Node.js, and more.'
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Digital Marketing',
      description: 'Grow your online presence with strategic digital marketing campaigns and SEO optimization.'
    },
    {
      icon: <Camera size={40} />,
      title: 'Branding',
      description: 'Develop a unique brand identity that resonates with your audience and stands out from competitors.'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">What we can do for you</p>
        
        <div className="services-grid">
          {serviceData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;