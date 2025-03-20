import React from "react";
import AliceCarousel from 'react-alice-carousel';
import ProductCards from "../ProductCards/ProductCards";

export default function ProductCardCarousel() {

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <ProductCards /> )

    return (
        <div>

            <AliceCarousel
                mouseTracking
                items={items}
                // responsive={responsive}
                disableButtonsControls
                autoPlay
                autoPlayInterval={1500}
                infinite
                controlsStrategy="alternate"
                responsive={responsive}
            />

        </div>
    )
}