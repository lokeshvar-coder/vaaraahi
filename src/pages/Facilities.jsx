import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Facilities = () => {
  const facilities = [
    {
      title: 'Modern Dining Hall',
      description: 'Spacious dining area serving fresh, nutritious meals three times a day. Special diet options available.',
      image: 'https://images.unsplash.com/photo-1615916732486-3e434b1a1228?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Student Lounge',
      description: 'Comfortable common room with TV, games, and study areas. Perfect for socializing and relaxation.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Professional Laundry',
      description: 'Modern washing and drying facilities available 24/7. Includes ironing stations and cloth hanging areas.',
      image: 'https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'High-Speed Internet',
      description: 'Fast and reliable Wi-Fi coverage throughout the building. Perfect for studying and entertainment.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Study Room',
      description: 'Quiet, well-lit study spaces with individual desks and power outlets.',
      image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Security System',
      description: '24/7 security with CCTV surveillance and professional security staff.',
      image: 'https://images.unsplash.com/photo-1557597774-9d475a0e9f99?auto=format&fit=crop&w=800&h=600'
    }
  ];

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Facilities
      </Typography>
      
      <Grid container spacing={4}>
        {facilities.map((facility, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={facility.image}
                alt={facility.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {facility.title}
                </Typography>
                <Typography variant="body1">
                  {facility.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Facilities;