import React from "react";
import AliceCarousel from "react-alice-carousel";
import ProductCards from "../ProductCards/ProductCards";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { Button } from "@mui/material";
import { useState } from "react";
import { mens_kurta } from "../../../data/men/men_kurta";

export default function ProductCardCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const responsive = {
    // for responsiveness here 0, 720, 1024 are screen sizes and items are number of items to be displayed.
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => setActiveSlide(activeSlide - 1);
  const slideNext = () => setActiveSlide(activeSlide + 1);
  const syncSlides = ({ item }) => setActiveSlide(item);
  const items = mens_kurta.map((item) => (
    <ProductCards product={item}/>
  ));

  return (
    <div className="relative">
      <div className="relative p-5">
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncSlides}
          activeSlide={activeSlide}
        />
        {activeSlide !== items.length - 5 && (
          <Button
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
          </Button>
        )}
        {activeSlide !== 0 && (
          <Button
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
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
}
