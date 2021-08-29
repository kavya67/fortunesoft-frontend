import React from "react";

import Carousel from "react-multi-carousel";

const MovieCarousel = ({ deviceType, children }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      ssr
      partialVisible
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
      // showDots={true}
      infinite={true}
    >
      {children}
    </Carousel>
  );
};

export default MovieCarousel;
