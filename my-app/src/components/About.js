import React from 'react';

const About = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #6cc14b, #face1b)', 
      color: '#f5f5dc', 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      
    }}>
      <div className="container text-center" style={{ maxWidth: '600px' }}>
        <h1 className="font-bold mb-4 flex justify-center" style={{ color: '#46703b', marginLeft: '150px' }}>About Ravian AI</h1>
        <p className="text-lg mb-8">Ravian AI is an innovative data science and analytics platform designed to empower users to unlock the full potential of their data. Our platform harnesses the power of cutting-edge Gen AI technologies to provide actionable insights, predictive analytics, and customizable solutions tailored to the unique needs of businesses and organizations.</p>
      </div>
    </div>
  );
};

export default About;
