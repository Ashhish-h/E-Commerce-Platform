import React from "react";

const ProductCards = () => {

    return (
        <div className="cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden w-[15rem] mx-3">

            <div className="h-[13rem] w-[10rem]">
                <img className="object-cover object-fit w-full h-full" src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/b/4/m/m-na-kurta-set-010-rama-woxen-original-imagzkgg8mnyxmcg.jpeg?q=70" alt="" />
            
            </div>   

            <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">krufiy</h3>
                <p className="mt-2 text-sm text-gray-500">Women solid pretty kurti</p>    
            </div>  

        </div>
    )

}


export default ProductCards;