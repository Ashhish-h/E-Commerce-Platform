import React from "react";
import MainCarousel from "../../components/HomeControl/MainCarousel";
import ProductCards from "../../components/ProductCards/ProductCards";
import ProductCardCarousel from "../../components/ProductCardCarousel/ProductCardCarousel";


export default function HomePage() {
    return (
        <div>
            <MainCarousel />

            <div>
                <ProductCardCarousel />
            </div>
        </div>
    );
}