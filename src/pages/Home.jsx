import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';

const Home = () => {
  return (
    <Box>
      <ImageSlider />
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              mb: 2
            }}
          >
            Welcome to Student Haven
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '800px',
              margin: '0 auto',
              mb: 4
            }}
          >
            Experience comfortable living with modern amenities and a supportive community
          </Typography>
          <Button 
            component={Link} 
            to="/contact" 
            variant="contained" 
            color="primary"
            size="large"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Book Your Stay Now
          </Button>
        </Box>
        
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 4,
                height: '100%',
                textAlign: 'center',
                backgroundColor: 'primary.main',
                color: 'white'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Premium Comfort
              </Typography>
              <Typography>
                Modern, well-furnished rooms with all essential amenities for a comfortable stay
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 4,
                height: '100%',
                textAlign: 'center',
                backgroundColor: 'secondary.main',
                color: 'white'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Prime Location
              </Typography>
              <Typography>
                Strategically located with easy access to public transport and educational institutions
              </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Paper 
              sx={{ 
                p: 4,
                height: '100%',
                textAlign: 'center',
                backgroundColor: 'primary.dark',
                color: 'white'
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                Student Community
              </Typography>
              <Typography>
                Join a vibrant community of students in our modern facilities and common areas
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;