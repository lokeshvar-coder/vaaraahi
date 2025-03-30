import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  CardMedia
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Header = () => { // Fixed the arrow function syntax
  const location = useLocation(); // Fixed the useLocation hook syntax

  const isActive = (path) => { // Fixed the arrow function syntax
    return location.pathname === path;
  };

  const buttonStyle = (path) => ({ // Fixed the arrow function syntax
    color: "white",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: isActive(path)
        ? "translateX(-50%) scaleX(1)"
        : "translateX(-50%) scaleX(0)",
      width: "80%",
      height: "2px",
      backgroundColor: "white",
      transition: "transform 0.3s ease-in-out"
    },
    "&:hover::after": {
      transform: "translateX(-50%) scaleX(1)"
    }
  });

  const Img = ({ src, alt, ...rest }) => (
    <Box component="img" src={src} alt={alt} {...rest} />
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: "primary.main", zIndex: 1100 }} // Added zIndex for layering
    >
      <Container style={{ maxWidth: "none" }}>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "white",
              fontWeight: 700,
              letterSpacing: "0.5px"
            }}
          >
            <Img src={'../assets/vaarahi.png'} alt={'VAARAHI HOSTEL'} />
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/rooms" sx={buttonStyle("/rooms")}>
              Rooms
            </Button>
            <Button
              component={Link}
              to="/facilities"
              sx={buttonStyle("/facilities")}
            >
              Facilities
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="contained"
              color="secondary"
              sx={{
                color: "white",
                boxShadow: "none",
                "&:hover": {
                  boxShadow: "none",
                  backgroundColor: "secondary.dark"
                }
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
