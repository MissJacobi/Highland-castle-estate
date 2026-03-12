import React, { useState } from 'react';

const ContactUs = ({ isOpen, setIsOpen }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
    }, 3000);
  };

  return (
    <>
      {!isOpen && (
        <div className="contact-bubble" onClick={() => setIsOpen(true)}>
             <img src="/images/envelope-icon.png" alt='Contact us' className='envelope-img'/> 
        </div>
      )}

    
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <button className="close-btn-circle" onClick={() => setIsOpen(false)} aria-label="Close">
            <span className="line-1"></span>
            <span className="line-2"></span>
            </button>
            
            {submitted ? (
              <div className="success-message">
                <h3>Message Sent</h3>
                <p>We will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <h2>Contact the Estate</h2>
                <p>Please reach out with any questions regarding your visit. We are here to assist you.</p>
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <textarea placeholder="How can we help you? (Inquiries about weddings, suites, or general questions...)" rows="5" required></textarea>
                <button type="submit" className="submit-btn">Send Inquiry</button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContactUs;