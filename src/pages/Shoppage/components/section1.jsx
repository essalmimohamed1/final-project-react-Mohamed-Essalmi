import './section1.scss';
import img1 from '../../../assets/images/size2.png';
import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


export const FirstSectionShop = () => {
    const [data, setData, basket, setbasket] = useContext(MyContext);
    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [priceFilter, setPriceFilter] = useState('All');
    const [sizeFilter, setSizeFilter] = useState('All');
    const [notification, setNotification] = useState(null); // Add notification state

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const handlePriceFilter = (price) => {
        setPriceFilter(price);
    };

    const handleSizeFilter = (size) => {
        setSizeFilter(size);
        
    };


    const add = (element) => {
        const isInCart = basket.find(item => item.name === element.name);
        if (!isInCart) {
            const newBasket = [...basket, element];
            setbasket(newBasket);
            setNotification({ message: `${element.name} added to cart!`, type: 'success' });
        } else {
            setNotification({ message: `${element.name} is already in the cart.`, type: 'error' });
        }

        // Remove notification after 3 seconds
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    }

    const filteredData = data.filter(element => {
        if (categoryFilter !== 'All' && element.category !== categoryFilter) {
            return false;
        }
        if (priceFilter !== 'All') {
            const [min, max] = priceFilter.split('-');
            const price = parseFloat(element.price);
            if (!(price >= parseFloat(min) && price <= parseFloat(max))) {
                return false;
            }
        }
        if (sizeFilter !== 'All' && element.size && !element.size.includes(sizeFilter)) {
            return false;
        }
        return true;
    });

    return (
        <>
            <div>
                <img src={img1} alt="" className='h-[40vh] w-[100vw]  relative' />
            </div>  

            {/* Notification */}
            {notification && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                                <div
                                    className={`bg-white rounded-lg shadow-lg p-6 max-w-sm w-full animate-fadeIn`}
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <FontAwesomeIcon
                                                icon={notification.type === 'success' ? faCheckCircle : faTimesCircle}
                                                className={`text-3xl mr-3 ${notification.type === 'success' ? 'text-green-600' : 'text-red-600'}`}
                                            />
                                            <span className="text-lg font-semibold text-gray-800">{notification.message}</span>
                                        </div>
                                        <button
                                            onClick={() => setNotification(null)}
                                            className="text-gray-600 hover:text-gray-900 transition duration-200 focus:outline-none"
                                            aria-label="Close"
                                        >
                                            <FontAwesomeIcon icon={faTimes} className="text-xl" />
                                        </button>
                                    </div>
                                </div>
                            </div>
            )}


            <div className='bg-black text-white flex lg:flex-row flex-col gap-14 p-2'>
                {/* Filter Section */}
                <div className='bg-black text-white flex lg:flex-row flex-col gap-14 p-2 rounded-lg shadow-lg'>
            {/* Filter Section */}
            <div className='flex flex-col gap-6 lg:w-[20vw] w-full p-6 rounded-md bg-black'>
                <button className="lg:hidden bg-green-500 text-white py-2 rounded-md" onClick={toggleDropdown}>
                    {dropdownOpen ? 'Hide Filters' : 'Show Filters'}
                </button>

                {/* Dropdown for mobile */}
                {dropdownOpen && (
                    <div className="flex flex-col gap-4 lg:hidden">
                        {/* Categories Filter */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Categories</h3>
                            <div className='flex flex-col gap-2'>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${categoryFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('All')}>All</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${categoryFilter === 'SALE' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('SALE')}>SALE</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${categoryFilter === 'NEW' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('NEW')}>NEW</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${categoryFilter === 'OLD' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('OLD')}>OLD</p>
                            </div>
                        </div>

                        {/* Price Filter */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Price</h3>
                            <div className='flex flex-col gap-2'>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${priceFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('All')}>All</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${priceFilter === '20-50' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('20-50')}>20dh-50dh</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${priceFilter === '50-100' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('50-100')}>50dh-100dh</p>
                            </div>
                        </div>

                        {/* Size Filter */}
                        <div className='flex flex-col gap-4'>
                            <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Size</h3>
                            <div className='flex flex-col gap-2'>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${sizeFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('All')}>All</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${sizeFilter === 'L' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('L')}>L</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${sizeFilter === 'S' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('S')}>S</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${sizeFilter === 'XS' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('XS')}>XS</p>
                                <p className={`cursor-pointer transition-all hover:text-orange-600 p-2 rounded-md ${sizeFilter === 'M' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('M')}>M</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Desktop Filter Section */}
                <div className='hidden lg:flex lg:flex-col gap-6'>
                    {/* Categories Filter */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Categories</h3>
                        <div className='flex flex-col gap-2'>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${categoryFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('All')}>All</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${categoryFilter === 'SALE' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('SALE')}>SALE</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${categoryFilter === 'NEW' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('NEW')}>NEW</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${categoryFilter === 'OLD' && 'font-bold bg-green-500'}`} onClick={() => handleCategoryFilter('OLD')}>OLD</p>
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Price</h3>
                        <div className='flex flex-col gap-2'>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${priceFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('All')}>All</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${priceFilter === '20-50' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('20-50')}>20dh-50dh</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${priceFilter === '50-100' && 'font-bold bg-green-500'}`} onClick={() => handlePriceFilter('50-100')}>50dh-100dh</p>
                        </div>
                    </div>

                    {/* Size Filter */}
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-xl font-semibold border-b-2 border-green-500 pb-2'>Size</h3>
                        <div className='flex flex-col gap-2'>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${sizeFilter === 'All' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('All')}>All</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${sizeFilter === 'L' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('L')}>L</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${sizeFilter === 'S' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('S')}>S</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${sizeFilter === 'XS' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('XS')}>XS</p>
                            <p className={`cursor-pointer transition-all hover:text-green-600 p-2 rounded-md ${sizeFilter === 'M' && 'font-bold bg-green-500'}`} onClick={() => handleSizeFilter('M')}>M</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


                {/* Product Grid Section */}
                <div className='flex flex-wrap gap-4 justify-center lg:w-[80vw] w-full p-5'>
                    {filteredData.map((element, index) => (
                        <div className='flex flex-col gap-2 w-[250px]' key={index}>
                            <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow">
                                <div className="h-96 w-full">
                                    <img className="h-full w-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize shadow shadow-black/60 text-white hover:bg-green-500 duration-300"
                                    onClick={() => add(element)}>
                                    ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col bg-gray-900 p-6 rounded-lg hover:shadow-xl transition-all duration-300'>
                                <h6 
                                    onClick={() => navigate(`/product/${element.name}`)} 
                                    className='text-white text-lg font-medium mb-2 hover:text-green-500 hover:underline cursor-pointer transition-colors'>
                                    {element.name}
                                </h6>
                                <div className="flex flex-col gap-2">
                                    <p className='text-green-400 text-xl font-semibold'>
                                        {element.price} DH
                                    </p>
                                    <p className='bg-gray-800 text-gray-300 text-sm px-4 py-1 rounded-full self-start'>
                                        Size: {element.size}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
