import './section1.scss';
import React, { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useParams } from 'react-router-dom';

export const FirstSectionProduct = () => {
    const [data] = useContext(MyContext);
    const { name } = useParams();
    const filterProduct = data.filter(product => product.name.trim().toLowerCase() === name.trim().toLowerCase());
    const [count, setCount] = useState(1);

    return (
        <div className="bg-black text-white w-full min-h-screen py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {filterProduct.length > 0 ? (
                    filterProduct.map((element, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Product Image Gallery */}
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <div className="flex justify-center lg:justify-start overflow-hidden">
                                    <img 
                                        className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg" 
                                        src={element.img} 
                                        alt={element.name} 
                                    />
                                </div>
                                {/* Thumbnail Images */}
                                <div className="flex gap-4 overflow-x-auto lg:flex-row lg:overflow-visible">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md border border-gray-700 cursor-pointer hover:opacity-75 transition-opacity"
                                            src={element.img}
                                            alt={`Product Thumbnail ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-3xl sm:text-4xl font-bold text-white">{element.name}</h1>
                                <h2 className="text-xl sm:text-2xl text-green-500">${element.price}</h2>
                                <p className="text-base sm:text-lg text-gray-400">{element.desc}</p>

                                {/* Size Options */}
                                <div className="flex gap-2 mt-4">
                                    {['S', 'M', 'L', 'XL'].map(size => (
                                        <button
                                            key={size}
                                            className="border border-gray-600 px-4 py-2 rounded-lg text-gray-300 hover:bg-green-500 hover:text-white transition-colors"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                {/* Additional Info */}
                                <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-sm mt-4">
                                    <p>Brand: MyVendor</p>
                                    <p>Categories: Boxy, Shirts, Sleeveless</p>
                                </div>

                                {/* Description Section */}
                                <div className="border-t border-gray-600 pt-4 mt-4">
                                    <h3 className="text-lg sm:text-xl font-semibold hover:text-green-500 transition">Description</h3>
                                    <p className="text-gray-400">
                                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. 
                                        Proin gravida arcu nisl, a dignissim mauris placerat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl py-10 text-gray-500">Product not found.</div>
                )}
            </div>
        </div>
    );
};
