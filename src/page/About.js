import React from 'react';
import back from '../assest/bg1.jpg';

const textStyle = {
  position: 'absolute',
  top: '10%',
  left: '1%',
 
  textAlign: 'center',
  color: '#fff', 
  width: '80%', 
  fontSize: '1rem', 
};

const greenTextStyle = {
  color: '#00ff00', 
};

const blackTextStyle = {
  color: '#000', 
};

const containerStyle = {
  position: 'relative',
  height: '50vh', 
};

const imageStyle = {
  width: '100%',
};

const About = () => {
  return (
    <div style={containerStyle}>
      <img src={back} alt="Background" style={imageStyle} />
      <div style={textStyle}>
        <div style={greenTextStyle}>
          <h4 style={{ fontSize: '3rem' }}>WELCOME TO KHANA KHAZANA</h4>
        </div>
        <div>
          <h3 style={blackTextStyle}>Welcome to Khana Khazana, where passion meets the plate,and every dish tells a story of flavor and tradition.</h3>
          <h3 style={blackTextStyle}>At Khana Khazana, we believe in crafting culinary experiences that go beyond taste, bringing you a symphony of flavors that celebrate the richness of our cultural heritage </h3>
          <h3 style={blackTextStyle}>Khana Khazana, more than a restaurant, it's an expression of our passion for food, a journey where every dish is a revelation.</h3>
          <h3 style={blackTextStyle}>Embark on a gastronomic journey with Khana Khazana, where every ingredient is carefully chosen</h3>
          <h3 style={blackTextStyle}>Khana Khazana  A culinary haven where we blend traditional recipes with a modern twist, offering you a unique dining experience</h3>
          <h3 style={blackTextStyle}>"WE ARE YOU, AND YOU ARE KHANA KHAZANA"</h3>
          

        </div>
      </div>
    </div>
  );
}

export default About;
