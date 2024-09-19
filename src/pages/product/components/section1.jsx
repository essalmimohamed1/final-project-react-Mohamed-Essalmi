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
        <div className="bg-gray-100 text-gray-900 min-h-screen py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {filterProduct.length > 0 ? (
                    filterProduct.map((element, index) => (
                        <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Product Image Gallery */}
                            <div className="flex flex-col gap-4 lg:gap-8">
                                <div className="flex justify-center lg:justify-start overflow-hidden">
                                    <img className="w-full h-auto object-cover rounded-lg shadow-lg" src={element.img} alt={element.name} />
                                </div>
                                <div className="flex gap-4 overflow-x-auto lg:flex-row lg:overflow-visible">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                        <img
                                            key={i}
                                            className="w-20 h-20 object-cover rounded-md border border-gray-300 cursor-pointer hover:opacity-75 transition-opacity"
                                            src={element.img}
                                            alt={`Product Thumbnail ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Product Details */}
                            <div className="flex flex-col gap-6">
                                <h1 className="text-4xl font-bold">{element.name}</h1>
                                <h2 className="text-2xl text-orange-500">${element.price}</h2>
                                <p className="text-lg text-gray-700">{element.desc}</p>

                                {/* Size Options */}
                                <div className="flex gap-2 mt-4">
                                    {['S', 'M', 'L', 'XL'].map(size => (
                                        <button
                                            key={size}
                                            className="border border-gray-400 px-4 py-2 rounded-lg text-gray-800 hover:bg-orange-500 hover:text-white transition-colors"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>

                                {/* Color Options */}
                                <div className="flex gap-3 mt-4">
                                    <button className="bg-gray-600 h-12 w-12 rounded-full border border-gray-300"></button>
                                    <button className="bg-orange-500 h-12 w-12 rounded-full border border-gray-300"></button>
                                    <button className="bg-gray-300 h-12 w-12 rounded-full border border-gray-300"></button>
                                </div>

                                {/* Quantity Selector */}
                                <div className="flex items-center gap-4 mt-4">
                                    <button
                                        onClick={() => setCount(count + 1)}
                                        className="bg-gray-200 px-4 py-2 rounded-full text-2xl hover:bg-gray-300 transition"
                                    >
                                        +
                                    </button>
                                    <span className="text-lg">{count}</span>
                                    <button
                                        onClick={() => setCount(count - 1)}
                                        disabled={count === 1}
                                        className="bg-gray-200 px-4 py-2 rounded-full text-2xl hover:bg-gray-300 transition"
                                    >
                                        -
                                    </button>
                                </div>

                                {/* Additional Info */}
                                <div className="flex justify-between text-gray-600 text-sm mt-4">
                                    <p>Brand: MyVendor</p>
                                    <p>Categories: Boxy, Shirts, Sleeveless</p>
                                </div>

                                {/* Description Section */}
                                <div className="border-t border-gray-300 pt-4 mt-4">
                                    <h3 className="text-xl font-semibold hover:text-orange-500 transition">Description</h3>
                                    <p className="text-gray-700">
                                        Fusce ornare mi vel risus porttitor dignissim. Nunc eget risus at ipsum blandit ornare vel sed velit. 
                                        Proin gravida arcu nisl, a dignissim mauris placerat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl py-10">Product not found.</div>
                )}
            </div>
        </div>
    );
};
