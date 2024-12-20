import React from 'react';

function Contact() {
  return (
    <div id="contact" style={{ padding: '20px', background: '#f9f9f9' }}>
      <h2>Contact Us</h2>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input type="text" placeholder="Your Name" style={{ padding: '10px' }} />
        <input type="email" placeholder="Your Email" style={{ padding: '10px' }} />
        <textarea placeholder="Your Message" style={{ padding: '10px', height: '100px' }}></textarea>
        <button type="submit" style={{
          background: '#028900',
          color: 'white',
          border: 'none',
          padding: '10px',
          cursor: 'pointer',
        }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
