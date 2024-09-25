import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <div className="bg-gray-200 flex flex-col   ">
            <div className="flex lg:flex flex-col lg:flex-row justify-around p-10  gap-9 lg:gap-9">
                <div className="lg:flex lg:flex-col lg:gap-2 flex-col flex gap-1">
                    <h5>GET IN TOUCH</h5>
                    <p className="w-[30vw]">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                    <div className="flex gap-4 text-3xl text-gray-500">
                        <FaFacebookF />
                        <FaTwitter />
                        <FaPinterest />
                        <FaGooglePlusG />
                        <FaInstagram />
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h5>CATEGORIES</h5>
                    <div className="flex flex-col  gap-2">
                        <Link className="text-decoration-none text-gray-500">Men</Link>
                        <Link className="text-decoration-none text-gray-500">Women</Link>
                        <Link className="text-decoration-none text-gray-500">Dresses</Link>
                        <Link className="text-decoration-none text-gray-500">Sunglasses</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h5>LINKS</h5>
                    <div className="flex flex-col  gap-2">
                        <Link className="text-decoration-none text-gray-500">Search</Link>
                        <Link className="text-decoration-none text-gray-500">About Us</Link>
                        <Link className="text-decoration-none text-gray-500">Contact Us</Link>
                        <Link className="text-decoration-none text-gray-500">Returns</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h5>HELP</h5>
                    <div className="flex flex-col  gap-2">
                        <Link className="text-decoration-none text-gray-500">Track Order</Link>
                        <Link className="text-decoration-none text-gray-500">Returns</Link>
                        <Link className="text-decoration-none text-gray-500">Shipping</Link>
                        <Link className="text-decoration-none text-gray-500">FAQs</Link>
                    </div>
                </div>
                <div className="flex flex-col gap-1">
                    <h5>NEWSLETER</h5>
                    <div className="flex flex-col gap-4">
                        <input type="email" placeholder="Email Adress" className="border-b-2 bg-gray-200 border-gray-300 p-2 w-[50vw] lg:w-[22vw]" />
                        <button className='bg-zinc-900 text-white lg:h-[7vh] h-[8vh] w-[50vw] font-light text-2xl lg:w-[17vw] rounded-3xl hover:bg-orange-600 hover:transition-all'>SUBCRIBE</button>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-slate-900 text-center">Copyright © 2022 Shopify Theme Developed by MassTechnologist All rights reserved.</p>
            </div>
        </div>
    );
};