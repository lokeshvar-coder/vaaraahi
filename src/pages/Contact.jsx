import React, { useRef } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const form = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'll need to sign up for EmailJS and replace with your actual service details
    emailjs
      .sendForm(
        "service_hhjtnz9",
        "template_rstlpvu",
        form.current,
        "Qd6UWb2bzQGm2kPiV"
      )
      .then(
        (result) => {
          navigate("/request-sent");
        },
        (error) => {
          console.log("Error:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Contact Us
      </Typography>

      <Box component="form" ref={form} onSubmit={handleSubmit} sx={{ mt: 4 }}>
        <TextField
          fullWidth
          label="Name"
          name="user_name"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          name="user_email"
          type="email"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Phone"
          name="user_phone"
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          name="message"
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
