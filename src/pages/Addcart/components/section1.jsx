import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import './section1.scss';
import img1 from '../../../assets/images/size2.png';

export const FirstSectionAddcart = () => {
    const [data, setData, basket, setBasket] = useContext(MyContext);
    const [quantities, setQuantities] = useState(basket.map(() => 1));

    const updateQuantity = (index, amount) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantities[index] + amount;

        if (newQuantities[index] <= 0) {
            removeProduct(index);
        } else {
            setQuantities(newQuantities);
        }
    };

    const removeProduct = (index) => {
        const newBasket = basket.filter((_, i) => i !== index);
        const newQuantities = quantities.filter((_, i) => i !== index);
        setBasket(newBasket);
        setQuantities(newQuantities);
    };

    const calculateCartTotal = () => {
        return basket.reduce((total, item, index) => {
            return total + item.price * quantities[index];
        }, 0).toFixed(2);
    };

    return (
        <div className='w-full min-h-screen bg-black flex flex-col items-center pb-10 text-white'>
            {/* Cart Items */}
            <div className='w-full max-w-[90vw] lg:max-w-[80vw] bg-gray-900 shadow-lg rounded-lg mt-5 p-4'>
                <h1 className='text-2xl font-bold text-white mb-6 text-center'>Your Cart</h1> {/* Title separated */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 border-b-2 p-2 text-center border-green-600'>
                    <div className='col-span-1 font-bold'>Product</div>
                    <div className='col-span-1 font-bold'>Name</div>
                    <div className='col-span-1 font-bold hidden md:block'>Unit Price</div>
                    <div className='col-span-1 font-bold'>Quantity</div>
                    <div className='col-span-1 font-bold'>Total</div>
                </div>

                {basket.length > 0 ? basket.map((element, index) => (
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-4 items-center p-4 border-b-2 border-green-600' key={index}>
                        <div className='col-span-1'>
                            <img className='w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] object-cover rounded-lg shadow-md' src={element.img} alt={element.name} />
                        </div>
                        <div className='col-span-1 text-center'>{element.name}</div>
                        <div className='col-span-1 text-center hidden md:block'>DH{element.price}</div>
                        <div className='col-span-1 text-center'>
                            <div className='flex items-center justify-center gap-2'>
                                <button onClick={() => updateQuantity(index, 1)} className='bg-green-600 text-white px-2 py-1 rounded-full hover:bg-green-700 transition'>
                                    +
                                </button>
                                <span>{quantities[index]}</span>
                                <button onClick={() => updateQuantity(index, -1)} className='bg-green-600 text-white px-2 py-1 rounded-full hover:bg-green-700 transition'>
                                    -
                                </button>
                            </div>
                        </div>
                        <div className='col-span-1 text-center'>DH{(element.price * quantities[index]).toFixed(2)}</div>
                    </div>
                )) : (
                    <div className="text-center col-span-5 py-5 text-gray-400">Your cart is empty.</div>
                )}
            </div>

            {/* Cart Total */}
            <div className='w-full max-w-[90vw] lg:max-w-[30vw] bg-gray-900 shadow-lg rounded-lg mt-10 p-4'>
                <h1 className='text-lg font-bold mb-5 text-green-400'>Cart Summary</h1>
                <div className='flex justify-between text-lg font-semibold text-white'>
                    <span>Subtotal:</span>
                    <span>DH{calculateCartTotal()}</span>
                </div>
                <div className='mt-5'>
                    <button className='w-full py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};
