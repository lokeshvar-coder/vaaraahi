import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const Rooms = () => {
  const rooms = [
    {
      title: 'Single Room (AC)',
      description: 'Comfortable single room with air conditioning, perfect for students who prefer privacy. Includes study desk, wardrobe, and attached bathroom.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Single Room (Non-AC)',
      description: 'Budget-friendly single room with natural ventilation. Comes with study desk, wardrobe, and shared bathroom facilities.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Double, Triple & Four Sharing (AC)',
      description: 'Spacious air-conditioned room for two, featuring twin beds, individual study areas, & shared wardrobe. Perfect for those who enjoy company.',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&h=600'
    },
    {
      title: 'Double, Triple & Four Sharing (Non-AC)',
      description: 'Economic double sharing option with good ventilation. Includes twin beds, study tables, and shared facilities.',
      image: 'https://images.unsplash.com/photo-1626265774643-f1943311a86b?auto=format&fit=crop&w=800&h=600'
    }
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Rooms
      </Typography>

      <Grid container spacing={4}>
        {rooms.map((room, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={room.image}
                alt={room.title}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {room.title}
                </Typography>
                <Typography variant="body1">
                  {room.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Rooms;