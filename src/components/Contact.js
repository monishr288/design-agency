import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState({ type: '', message: '' });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      
      try {
        // Replace these with your EmailJS credentials
        const serviceId = 'service_vzup2dg'; // Get from EmailJS
        const templateId = 'template_loukek8'; // Get from EmailJS
        const publicKey = '05xO3ZEcKGwdqGqXH'; // Get from EmailJS

        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'your-email@gmail.com', // Your email address
          reply_to: formData.email
        };

        const result = await emailjs.send(
          serviceId, 
          templateId, 
          templateParams, 
          publicKey
        );

        if (result.status === 200) {
          setEmailStatus({
            type: 'success',
            message: 'Message sent successfully! We\'ll get back to you soon.'
          });
          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          
          // Clear success message after 5 seconds
          setTimeout(() => {
            setSubmitted(false);
            setEmailStatus({ type: '', message: '' });
          }, 5000);
        }
      } catch (error) {
        console.error('Email send failed:', error);
        setEmailStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
        
        // Clear error message after 5 seconds
        setTimeout(() => {
          setEmailStatus({ type: '', message: '' });
        }, 5000);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's work together on your next project</p>
        
        {emailStatus.message && (
          <div className={`status-message ${emailStatus.type}`}>
            {emailStatus.message}
          </div>
        )}
        
        <form ref={formRef} className="contact-form" onSubmit={sendEmail} noValidate>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button 
            type="submit" 
            className="btn btn-primary submit-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'} 
            {!isSubmitting && <Send size={18} />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;