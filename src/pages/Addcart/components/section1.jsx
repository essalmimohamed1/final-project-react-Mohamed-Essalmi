import { useContext, useState } from 'react';
import { MyContext } from '../../../utils/contextProvider';
import './section1.scss';
import img1 from '../../../assets/images/size2.png';

export const FirstSectionAddcart = () => {
    const [data, setData, basket, setBasket] = useContext(MyContext);
    const [quantities, setQuantities] = useState(basket.map(() => 1));

    // Update Quantity and Remove Item when Quantity is 0
    const updateQuantity = (index, amount) => {
        const newQuantities = [...quantities];
        newQuantities[index] = newQuantities[index] + amount;

        // If quantity goes to 0, remove the product from the basket
        if (newQuantities[index] <= 0) {
            removeProduct(index);
        } else {
            setQuantities(newQuantities);
        }
    };

    // Remove product from the basket when quantity reaches 0
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
        <div className='w-full min-h-screen bg-gray-100 flex flex-col items-center pb-10'>
            {/* Header Image */}
            <div className='w-full'>
                <img src={img1} alt="" className='h-[35vh] w-[100vw] object-cover' />
            </div>

            {/* Cart Items */}
            <div className='w-[90vw] lg:w-[80vw] bg-white shadow-lg rounded-lg mt-5 p-5'>
                <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 border-b-2 p-2 text-center'>
                    <div className='col-span-1 font-bold'>Product</div>
                    <div className='col-span-1 font-bold'>Name</div>
                    <div className='col-span-1 font-bold hidden sm:block'>Unit Price</div>
                    <div className='col-span-1 font-bold'>Quantity</div>
                    <div className='col-span-1 font-bold'>Total</div>
                </div>

                {basket.length > 0 ? basket.map((element, index) => (
                    <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 items-center p-5 border-b-2' key={index}>
                        <div className='col-span-1'>
                            <img className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-lg shadow-md' src={element.img} alt={element.name} />
                        </div>
                        <div className='col-span-1 text-center'>{element.name}</div>
                        <div className='col-span-1 text-center hidden sm:block'>DH{element.price}</div>
                        <div className='col-span-1 text-center'>
                            <div className='flex items-center justify-center gap-2'>
                                <button onClick={() => updateQuantity(index, 1)} className='bg-gray-300 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-400'>
                                    +
                                </button>
                                <span>{quantities[index]}</span>
                                <button onClick={() => updateQuantity(index, -1)} className='bg-gray-300 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-400'>
                                    -
                                </button>
                            </div>
                        </div>
                        <div className='col-span-1 text-center'>DH{(element.price * quantities[index]).toFixed(2)}</div>
                    </div>
                )) : (
                    <div className="text-center col-span-5 py-5">Your cart is empty.</div>
                )}
            </div>

            {/* Cart Total */}
            <div className='w-[90vw] lg:w-[30vw] bg-white shadow-lg rounded-lg mt-10 p-5'>
                <h1 className='text-lg font-bold mb-5 text-gray-800'>Cart Summary</h1>
                <div className='flex justify-between text-lg font-semibold'>
                    <span>Subtotal:</span>
                    <span>DH{calculateCartTotal()}</span>
                </div>
                <div className='mt-5'>
                    <button className='w-full py-3 text-white bg-green-600 rounded-full hover:bg-green-700 transition duration-300'>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </div>
    );
};
