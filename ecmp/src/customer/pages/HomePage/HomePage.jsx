import React from "react";
import MainCarousel from "../../components/HomeControl/MainCarousel";
import ProductCards from "../../components/ProductCards/ProductCards";
import ProductCardCarousel from "../../components/ProductCardCarousel/ProductCardCarousel";
import { mens_kurta } from "../../../data/men/men_kurta";
import Footer from "../../components/Footer/Footer";


export default function HomePage() {
    return (
        <div>
            <MainCarousel />

            <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
                <ProductCardCarousel data={mens_kurta} sectionName={"mens'kurta"}/>
                <ProductCardCarousel data={mens_kurta} sectionName={"mens'shoes"}/>
                <ProductCardCarousel data={mens_kurta} sectionName={"men's watch"}/>
                <ProductCardCarousel data={mens_kurta} sectionName={"Men's Jeans"}/>
                <ProductCardCarousel data={mens_kurta} sectionName={"Men's trouser"}/>
               
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
}