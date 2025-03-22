import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCards from "../ProductCards/ProductCards";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";

export default function ProductCardCarousel({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const responsive = {
    // for responsiveness here 0, 720, 1024 are screen sizes and items are number of items to be displayed.
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const items = data.slice(0, 10).map((item) => (
    <ProductCards product={item} />
  ));

  // Create a ref for AliceCarousel to control navigation
  const carouselRef = React.useRef(null);

  const slidePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (carouselRef.current) {
      carouselRef.current.slideNext();
    }
  };

  const handleSlideChanges = (e) =>{
    setCurrentIndex(e.item) // e.item gives the current active index of the slide
  }


  return (
    <div className="">
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef} // Attach ref here
          items={items}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          onSlideChanged={handleSlideChanges}
        />

        {/* hiding the right arrow key on the last slide */}
        {currentIndex < items.length - 5 &&  <Button
          variant="contained"
          className="z-50"
          onClick={slideNext}
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
            bgcolor: "white",
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
        {currentIndex > 0 && <Button
          variant="contained"
          className="z-50"
          onClick={slidePrev}
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%) rotate(-90deg)",
            bgcolor: "white",
          }}
          aria-label="previous"
        >
          <KeyboardArrowLeftIcon
            sx={{ transform: "rotate(90deg)", color: "black" }}
          />
        </Button>}
      </div>
    </div>
  );
}
