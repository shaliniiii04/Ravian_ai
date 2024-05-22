import React from 'react';
import Upload from './Upload';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Home = () => {
  return (
    <div style={{
      background: 'linear-gradient(to right, #6cc14b, #face1b)', 
      color: '#f5f5dc', 
      minHeight: '100vh', 
      padding: '20px' 
    }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={8} md={8} lg={6}>
          <Typography variant="h2" align="center" gutterBottom marginTop={4} style={{color: '#46703b'}}>
            Welcome to Ravian AI
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Unlock the full potential of your data with our innovative data science and analytics platform.
          </Typography>
          <div className="container mx-auto text-center">
            <Typography variant="h4" align="center" gutterBottom marginTop={4} style={{color: '#46703b'}}>
              Key Features
            </Typography>
            </div>
            <div className="container mx-auto text-center">
            <ul className=" text-lg space-y-4 mb-8 " style={{align:'center'}}>
              <li style={{color: '#f5f5dc', align:'center'}}>Data Interpretation and Visualization</li>
              <li style={{color: '#f5f5dc'}}>Predictive Analytics and ML Model Building</li>
              <li style={{color: '#f5f5dc'}}>Customizable Solutions and Integrations</li>
              <li style={{color: '#f5f5dc'}}>Gen AI Technology</li>
              <li style={{color: '#f5f5dc'}}>Collaboration and Knowledge Sharing</li>
            </ul>

            </div>
            
            <Upload />
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
