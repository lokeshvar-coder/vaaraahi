import React from "react";
import Slider from "react-slick";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const images = [
    "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1600&h=900",
    "https://images.unsplash.com/photo-1629794226066-349748040fb7?auto=format&fit=crop&w=1600&h=900",
    "https://images.unsplash.com/photo-1619810230359-b2c2f61c49cd?auto=format&fit=crop&w=1600&h=900",
    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&h=900"
  ];

  return (
    <Box sx={{ width: "100%", marginBottom: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box key={index}>
            <img
              src={image}
              alt={`Hostel View ${index + 1}`}
              style={{ width: "100%", height: "600px", objectFit: "cover" }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
