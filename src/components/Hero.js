import React from 'react';
import { Sparkles, Palette, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  // Function to scroll to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Creative Design Agency</span>
          </div>
          <h1 className="hero-title">
            We Create <span className="gradient-text">Digital Experiences</span> That Inspire
          </h1>
          <p className="hero-subtitle">
            We craft beautiful digital experiences that help your brand stand out in the digital world. 
            Let's bring your ideas to life with innovative design and cutting-edge technology.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('services')}
            >
              Get Started
              <ArrowRight size={18} className="btn-icon" />
            </button>
            <button 
              className="btn btn-outline"
              onClick={() => scrollToSection('portfolio')}
            >
              View Our Work
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">150+</span>
              <span className="stat-label">Projects Done</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Awards Won</span>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="hero-gradient">
            <div className="logo-container">
              <div className="logo-ring"></div>
              <div className="logo-ring ring-2"></div>
              <div className="logo-ring ring-3"></div>
              <div className="logo-content">
                <Palette className="logo-icon" size={50} />
                <span className="logo-text">DA</span>
                <div className="logo-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="floating-element element-1">
              <div className="dot"></div>
            </div>
            <div className="floating-element element-2">
              <div className="dot"></div>
            </div>
            <div className="floating-element element-3">
              <div className="dot"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="hero-background">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;