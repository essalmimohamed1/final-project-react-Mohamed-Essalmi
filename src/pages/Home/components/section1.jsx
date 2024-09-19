import './section1.scss'
import { useContext } from 'react';
import { MyContext, MyProvider } from '../../../utils/contextProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import banner02 from '../../../assets/images/Umbro-g1.jpg'
import banner03 from '../../../assets/images/maillot-vert1.png'
import banner04 from '../../../assets/images/Terceira-camisa-do-Raja-Casablanca-2024-2025-Umbro-8.jpg'
import banner05 from '../../../assets/images/polos-0001-calque-3.png'
import banner07 from '../../../assets/images/t6.png'
import banner09 from '../../../assets/images/Camisa-reserva-do-Raja-Casablanca-2024-2025-Umbro-3.jpg'
import banner08 from '../../../assets/images/banner-08.jpg'
import shopItem1 from '../../../assets/images/shop-item-09.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom';
import blog1 from '../../../assets/images/blogt1.png'
import blog2 from '../../../assets/images/blogt2.png'
import blog3 from '../../../assets/images/blogt4.png'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const FirstSectionHome = () => {
    const [data, setData , basket,setbasket] = useContext(MyContext);
    const navigate = useNavigate()
    const product = [shopItem1 , banner03 , banner05]
    const random = Math.floor(Math.random() * product.length);

    

    const add = (element) => {
        const isInCart = basket.find(item => item.name === element.name);        
        if (!isInCart) {
            const newBasket = [...basket, element];
            setbasket(newBasket);
            console.log(basket);
        } else {
            console.log("Item is already in the cart.");
        }
    }

    const getrgory = data.filter((element, index) => {

        if (element.category == 'SALE') {

        } return element.category == 'SALE'
    }
    )
    

    const getrgory1 = data.filter((element, index) => {

        if (element.category == 'NEW') {

        } return element.category == 'NEW'
    }
    )

    const getrgory2 = data.filter((element, index) => {

        if (element.category == 'OLD') {

        } return element.category == 'OLD'
    }
    )

    
    return (
        <>        
                {/* Carousel */}
                    <Carousel >
                        <Carousel.Item className='w-full'>
                            <div className='item1 flex flex-col justify-center items-center gap-3 text-white'>
                                <p className='text-3xl'>Umbro Collection</p>
                                <h1 className='text-7xl p-9 text-center font-bold'>NEW ARRIVALS</h1>
                                <button onClick={() => navigate(`/Shop`)} className=' rounded-full w-[50vw] lg:w-[12vw] p-2 bg-slate-50 hover:bg-green-500 hover:text-slate-100 text-slate-950 font-light'>SHOP NOW</button>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='item2 flex flex-col justify-center items-center gap-3 text-white'>
                                <p className='text-3xl'>Umbro Collection</p>
                                <h1 className='text-7xl p-9 text-center font-bold'>NEW ARRIVALS</h1>
                                <button onClick={() => navigate(`/Shop`)} className=' rounded-full w-[50vw] lg:w-[12vw] p-2 bg-slate-50 hover:bg-green-500 hover:text-slate-100 text-slate-950 font-light'>SHOP NOW</button>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className='item3 flex flex-col justify-center items-center gap-3 text-white'>
                                <p className='text-3xl'>Umbro Collection</p>
                                <h1 className='text-7xl p-9 text-center font-bold'>NEW ARRIVALS</h1>
                                <button onClick={() => navigate(`/Shop`)} className=' rounded-full w-[50vw] lg:w-[12vw] p-2 bg-slate-50 hover:bg-green-500 hover:text-slate-100 text-slate-950 font-light'>SHOP NOW</button>
                            </div>
                        </Carousel.Item>
                        </Carousel>
                {/*  */}
                <div className='bg-stone-950'>
                        <div className='lg:flex lg:flex-row flex flex-col gap-8 p-20' >
                            <div className='flex flex-col w-[100%] gap-8 rounded '>
                                <div className='overflow-hidden relative'>
                                    <img className=' hover:scale-110 duration-500' src={banner02} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-9 bg-slate-100 hover:bg-green-600 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black  duration-500'>DRESSES</button>
                                    </div>
                                </div>
                                <div className='overflow-hidden relative rounded '>
                                    <img className=' hover:scale-110 duration-500' src={banner05} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-10 bg-slate-100 hover:bg-green-600 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black duration-500'>SUNGLASSES</button>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-[100%] gap-8 rounded  '>
                                <div className='overflow-hidden relative'>
                                    <img className='hover:scale-110 duration-500' src={banner03} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-10 bg-slate-100 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-green-600 duration-500'>WATCHES</button>
                                    </div>
                                </div>
                                <div className='overflow-hidden relative rounded  '>
                                    <img className='hover:scale-110 duration-500' src={banner07} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-9 bg-slate-50 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-green-600 duration-500'>FOOTERWEAR</button>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col w-[100%] gap-8 rounded '>
                                <div className='overflow-hidden relative'>
                                    <img className='hover:scale-110 duration-500' src={banner04} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-9 bg-slate-100 px-20 py-4 opacity-95 text-xl font-light shadow-lg text-black hover:bg-green-600 duration-500'>BAGS</button>
                                    </div>
                                </div>
                                <div className='overflow-hidden relative rounded '>
                                    <img className='hover:scale-110 duration-500' src={banner09} alt="" />
                                    <div className='flex justify-center'>
                                        <button className='absolute bottom-10 bg-slate-100 px-14 py-3 opacity-95 text-xl font-light shadow-lg text-black hover:bg-green-600 duration-500'>ACCESORIES</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center p-4 bg-black text-white'>
                        <h1 className='text-4xl font-semibold'>FEATURED PRODUCTS</h1>
                    </div>

                    <div className='flex justify-center w-full p-4 bg-black'>
                    <Tabs aria-label="Tabs with " style={{textDecoration: ''}} className='flex flex-col items-center gap-3 justify-center w-full'>
                        <TabList className={' flex gap-4 text-2xl'}>
                            <Tab className={`cursor-pointer transition-all text-black bg-green-500 text-blac px-6 py-2 rounded-lgborder-green-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none`}>Sale</Tab>
                            <Tab className={`cursor-pointer transition-all bg-green-500 text-black  px-6 py-2 rounded-lgborder-green-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none`}>New</Tab>
                            <Tab className={`cursor-pointer transition-all bg-green-500 text-black  px-6 py-2 rounded-lgborder-green-500 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                            active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none`} >Old</Tab>
                        </TabList>
                        <TabPanel>
                            <div className='lg:flex lg:flex-row flex flex-col  gap-7 '>
                                    {
                                        getrgory.map((element, index) =>
                                            <div className='flex flex-col gap-2'>
                                                <div className=' h-fit w-72 group '>
                                                    <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                                        <div class="h-96 w-72">
                                                            <img class="h-full w-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                                        </div>
                                                        <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                                        <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                                            onClick={() => add(element)}
                                                            >ADD TO CART</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h6 onClick={() => navigate(`/product/${element.name}`)} className=' no-underlin text-gray-400 hover:text-orange-400 duration-600' >{element.name}</h6>
                                                    <p className='text-gray-600'>{element.price}</p>    
                                                </div>
                                            </div>
                                        )
                                    }
                            </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='lg:flex lg:flex-row flex flex-col  gap-7 '>
                                    {
                                        getrgory1.map((element, index) =>
                                                <div className='flex flex-col gap-2'>
                                                        <div className=' h-fit w-72 group '>
                                                    <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                                        <div class="h-96 w-72">
                                                            <img class="h-full w-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                                        </div>
                                                        <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                                        <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                                            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                                            onClick={() => add(element)}
                                                            >ADD TO CART</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col'>
                                                    <h6 onClick={() => navigate(`/product/${element.name}`)} className=' no-underline hover:text-orange-400 duration-300 text-gray-400' >{element.name}</h6>
                                                    <p className='text-gray-400'>{element.price}</p>    
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        </TabPanel>
                        <TabPanel>
                        <div className='lg:flex lg:flex-row flex flex-col  gap-7 '>
                                    {
                                        getrgory2.map((element, index) =>
                                            <div className='flex flex-col gap-2'>
                                                    <div className=' h-fit w-72 group '>
                                                <div class="group w-72 relative cursor-pointer items-center justify-center overflow-hidden transition-shadow ">
                                                    <div class="h-96 w-72">
                                                        <img class="h-full w-full object-cover transition-transform respoMap duration-500 group-hover:rotate-3 group-hover:scale-125" src={element.img} alt="" />
                                                    </div>
                                                    <div class=" w-72 absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                                    <div class=" w-72 absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-[40%]">
                                                        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize shadow shadow-black/60 bg-gray-100 text-white hover:bg-red-500 hover:text-white duration-300"
                                                        onClick={() => add(element)}
                                                        >ADD TO CART</button>
                                                    </div>
                                                </div>
                                            </div>
                                                <div className='flex flex-col'>
                                                    <h6 onClick={() => navigate(`/product/${element.name}`)} className=' no-underline hover:text-orange-400 duration-300 text-gray-400' >{element.name}</h6>
                                                    <p className='text-gray-400'>{element.price}</p>    
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                        </TabPanel>
                    </Tabs>
                </div>
            <section className='p-20 bg-black'>

                <h1 className='text-center text-4xl font-semibold bg-black text-white'>OUR BLOG</h1>
                <div className='sm:flex lg:flex lg:flex-row sm:flex-col  gap-8 py-10'>
                    <div className='flex  flex-col gap-4'>
                        <div className='overflow-hidden'>  
                            <img className='hover:scale-110 duration-500' src={blog1} alt="" />
                        </div>
                        <h1 className='text-2xl text-yellow-500'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-300 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-400 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                    <div className='overflow-hidden'>  
                            <img className='hover:scale-110 duration-500' src={blog2} alt="" />
                        </div>
                        <h1 className='text-2xl text-yellow-500'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-300 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-400 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='overflow-hidden'>  
                            <img className='hover:scale-110 duration-500' src={blog3} alt="" />
                        </div>
                        <h1 className='text-2xl text-yellow-500'>Black Friday Guide: Best Sales & Discount Codes</h1>
                        <p className='text-gray-300 font-light'>by fashe-theme Admin on Dec 28,2017</p>
                        <p className='text-gray-400 font-light w-[90%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed turpis sed lorem dignissim vulputate nec cursus ante. Nunc sit...</p>
                    </div>
                </div>
            </section>
            
            <section className='p-20 flex flex-col gap-4 bg-black text-white'>
                <div>
                    <h1 className='text-center text-4xl font-bold  bg-black text-white'>@ FOLLOW US ON INSTAGRAM</h1>
                </div>
                <div className='sm:flex lg:flex  sm:flex-col lg:flex-row justify-around items-center'>
                    <div className='flex flex-col items-center'>
                        <h1 className='font-light text-2xl text-center'>Free Delivery Worldwide</h1>
                        <p className='italic font-light'>Mirum est notare quam littera gothica</p>
                    </div>

                    <div className='flex flex-col items-center text-center'>
                        <h1 className='font-light text-2xl text-center'>30 Days Return</h1>
                        <p className='italic font-light'>Simply return it within 30 days for an exchange.</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <h1 className='font-light text-2xl text-center'>Store Opening</h1>
                        <p className='italic font-light'>Shop open from Monday to Sunday</p>
                    </div>
                </div>
            </section>

        </>
    )
}
