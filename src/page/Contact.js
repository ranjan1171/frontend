import React from 'react';
import background from '../assest/bg7.jpg';

const contactContainerStyle = {
  position: 'relative',
  height: '100vh',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'center',
  padding: '20px',
};

const contactInfoStyle = {
  position: 'absolute',
  top: '40%',
  left: '20%',
  transform: 'translate(-50%, -50%)',
};

const darkRedText = {
  color: '#8B0000', // Dark red text color
  fontSize: '24px',
};

const blackText = {
  color: '#000',
  fontSize: '24px',
};

const Contact = () => {
  return (
    <div style={contactContainerStyle}>
      <div style={contactInfoStyle}>
        <h2 style={{ fontSize: '36px' }}>Contact Us</h2>
        <p style={blackText}>Address:</p>
        <p style={darkRedText}>Vrindavan, Sudna, Palamu</p>
        <p style={darkRedText}>Daltonganj, Jharkhand, 822102, India</p>
        <p style={blackText}>Phone no: <span style={darkRedText}>7992272611</span></p>
        <p style={blackText}>Email: <a href="mailto:theGreatRanjan1272@gmail.com" style={darkRedText}>theGreatRanjan1272@gmail.com</a></p>
        <p style={blackText}>Instagram: <a href="https://www.instagram.com/rj_ranjankkr/" style={darkRedText}>rj_ranjankkr</a></p>
      </div>
    </div>
  );
}

export default Contact;
