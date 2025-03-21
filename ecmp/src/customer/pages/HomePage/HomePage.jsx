import React from "react";
import MainCarousel from "../../components/HomeControl/MainCarousel";
import ProductCards from "../../components/ProductCards/ProductCards";
import ProductCardCarousel from "../../components/ProductCardCarousel/ProductCardCarousel";


export default function HomePage() {
    return (
        <div>
            <MainCarousel />

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <ProductCardCarousel />
                <ProductCardCarousel />
                <ProductCardCarousel />
                <ProductCardCarousel />
                <ProductCardCarousel />
            </div>
        </div>
    );
}