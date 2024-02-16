import './section1.scss';
import img1 from '../../../assets/images/heading-pages-02.jpg';
import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import { useNavigate } from 'react-router-dom';

export const FirstSectionShop = () => {
    const [data, setData] = useContext(MyContext);
    const navigate = useNavigate();

    const [categoryFilter, setCategoryFilter] = useState('All');
    const [priceFilter, setPriceFilter] = useState('All');
    const [sizeFilter, setSizeFilter] = useState('All');

    const handleCategoryFilter = (category) => {
        setCategoryFilter(category);
    };

    const handlePriceFilter = (price) => {
        setPriceFilter(price);
    };

    const handleSizeFilter = (size) => {
        setSizeFilter(size);
    };

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
                <img src={img1} alt="" className='h-[35vh] relative' />
                <h1 className='absolute top-[23vh] left-[40vw] text-white font-bold text-7xl'>PRODUCTS</h1>
            </div>  
            <div className='flex gap-14 p-2'>
                <div className='flex flex-lg-column gap-6 w-[20vw] p-12'>
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
                <div className='flex w-[80vw] gap-3 items-center justify-center p-9 flex-wrap'>
                    {filteredData.map((element, index) => (
                        <div className='flex flex-col gap-2' key={index}>
                            <div className='overflow-hidden'>
                                <img className='hover:scale-110 duration-700 w-[250px]' src={element.img} alt="" />
                            </div>
                            <div className='flex flex-col'>
                                <h6 onClick={() => navigate(`/product/${element.name}`)} className='no-underline text-gray-400 hover:text-orange-400 duration-600'>{element.name}</h6>
                                <p className='text-gray-600'>{element.price}</p>
                                <p className='text-gray-600'>{element.size}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
