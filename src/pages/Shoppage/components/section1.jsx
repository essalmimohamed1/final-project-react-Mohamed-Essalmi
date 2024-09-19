import './section1.scss';
import img1 from '../../../assets/images/size2.png';
import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

export const FirstSectionShop = () => {
    const [data, setData, basket, setbasket] = useContext(MyContext);
    const navigate = useNavigate();

    const [categoryFilter, setCategoryFilter] = useState('All');
    const [priceFilter, setPriceFilter] = useState('All');
    const [sizeFilter, setSizeFilter] = useState('All');
    const [notification, setNotification] = useState(null); // Add notification state

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
                <div className={`notification ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white p-4 rounded-md flex items-center justify-center gap-4`}>
                    <FontAwesomeIcon
                        icon={notification.type === 'success' ? faCheckCircle : faTimesCircle}
                        className="text-2xl"
                    />
                    <span>{notification.message}</span>
                </div>
            )}

            <div className='bg-black text-white flex lg:flex-row flex-col gap-14 p-2'>
                {/* Filter Section */}
                <div className='flex flex-col gap-6 lg:w-[20vw] w-full p-12'>
                    <div className='flex flex-col gap-2'>
                        <h3>Categories</h3>
                        <div className='p-2'>
                            <p className={`hover:text-orange-600 ${categoryFilter === 'All' && 'font-bold'}`} onClick={() => handleCategoryFilter('All')}>All</p>
                            <p className={`hover:text-orange-600 ${categoryFilter === 'SALE' && 'font-bold'}`} onClick={() => handleCategoryFilter('SALE')}>SALE</p>
                            <p className={`hover:text-orange-600 ${categoryFilter === 'NEW' && 'font-bold'}`} onClick={() => handleCategoryFilter('NEW')}>NEW</p>
                            <p className={`hover:text-orange-600 ${categoryFilter === 'OLD' && 'font-bold'}`} onClick={() => handleCategoryFilter('OLD')}>OLD</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>Price</h3>
                        <div className='p-2'>
                            <p className={`hover:text-orange-600 ${priceFilter === 'All' && 'font-bold'}`} onClick={() => handlePriceFilter('All')}>All</p>
                            <p className={`hover:text-orange-600 ${priceFilter === '0-20' && 'font-bold'}`} onClick={() => handlePriceFilter('0-20')}>0-20</p>
                            <p className={`hover:text-orange-600 ${priceFilter === '20-40' && 'font-bold'}`} onClick={() => handlePriceFilter('20-40')}>20-40</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3>Size</h3>
                        <div className='p-2'>
                            <p className={`hover:text-orange-600 ${sizeFilter === 'All' && 'font-bold'}`} onClick={() => handleSizeFilter('All')}>All</p>
                            <p className={`hover:text-orange-600 ${sizeFilter === 'L' && 'font-bold'}`} onClick={() => handleSizeFilter('L')}>L</p>
                            <p className={`hover:text-orange-600 ${sizeFilter === 'S' && 'font-bold'}`} onClick={() => handleSizeFilter('S')}>S</p>
                            <p className={`hover:text-orange-600 ${sizeFilter === 'XS' && 'font-bold'}`} onClick={() => handleSizeFilter('XS')}>XS</p>
                            <p className={`hover:text-orange-600 ${sizeFilter === 'M' && 'font-bold'}`} onClick={() => handleSizeFilter('M')}>M</p>
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
                                    <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize shadow shadow-black/60 text-white hover:bg-red-500 duration-300"
                                    onClick={() => add(element)}>
                                    ADD TO CART
                                    </button>
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <h6 onClick={() => navigate(`/product/${element.name}`)} className='no-underline text-gray-400 hover:text-orange-400 duration-600'>{element.name}</h6>
                                <p className='text-gray-600'>{element.price}DH</p>
                                <p className='text-gray-600'>{element.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
