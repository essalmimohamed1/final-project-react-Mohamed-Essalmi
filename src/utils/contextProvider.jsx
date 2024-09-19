
import React, { createContext, useState } from 'react'
import product1 from '../assets/images/t1.jpg'
import product2 from '../assets/images/t2.jpg'
import product3 from '../assets/images/t3.jpg'
import product4 from '../assets/images/t4.png'
import product5 from '../assets/images/blogt1.png'
import product6 from '../assets/images/t8.png'
import product7 from '../assets/images/t7.jpg'
import product8 from '../assets/images/t6.png'
import product9 from '../assets/images/blogt2.png'
import product10 from '../assets/images/blogt3.png'
import product11 from '../assets/images/blogt4.png'
import product12 from '../assets/images/t11.jpg'
import product13 from '../assets/images/t9.jpg'
import product14 from '../assets/images/t10.jpg'
import product15 from '../assets/images/Umbro-g1.jpg'
import product16 from '../assets/images/item-16.jpg'
import product17 from '../assets/images/item-17.jpg'



export const MyContext = createContext()
export const MyProvider = ({ children }) => {
    const [data, setData] = useState([
        {
            name: 'Maillot Extérieur 24/25',
            desc: 'Maillot Extérieur Black Raja Club Athletic UMBRO 24/25',
            img: product1,
            price: '50.00',
            size: [ 'M', 'XS'],
            category: 'NEW'
        },

        {
            name: 'Maillot Extérieur 24/25',
            desc: 'Maillot Extérieur Black Raja Club Athletic UMBRO 24/25',
            img: product2,
            price: '20.00',
            size: [ 'M', 'XS'],
            category: 'NEW'

        },

        {
            name: 'Maillot Extérieur 24/25',
            desc: 'Maillot Extérieur Black Raja Club Athletic UMBRO 24/25',
            img: product3,
            price: '50.00',
            size: ['S', 'L', 'M', 'XS'],
            category: 'NEW'

        },

        {
            name: 'MaillotUmbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img: product4,
            price: '70.00',
            size: ['S', 'L', 'M', 'XS'],
            category: 'SALE'
        },


        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product5,
            price: '20.00',
            size: [ 'M', 'XS'],
            category: 'OLD'

        },

        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product6,
            price: '50.00',
            size: [ 'M', 'XS'],
            category: 'SALE'
        },

        {
            name: 'Maillot Extérieur 24/25',
            desc: 'Maillot Extérieur Black Raja Club Athletic UMBRO 24/25',
            img : product7,
            price: '70.00',
            size: [ 'M', 'XS'],
            category: 'NEW'
        },

        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product8,
            price: '20.00',
            size: ['S', 'L', 'M', 'XS'],
            category: 'SALE'
        },

        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product9,
            price: '40.00',
            size: ['S', 'L', 'M', 'XS'],
            category: 'OLD'
        },

        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product10,
            size: ['S', 'L', 'M', 'XS'],
            price: '40.00',
            category: 'OLD'
        },
        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product11,
            size: ['S', 'L', 'M', 'XS'],
            price: '20.00',
            category: 'OLD'
        },
        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            size: ['S', 'L', 'M', 'XS'],
            img : product12,
            price: '120.00',
            category: 'SALE'
        },
        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            img : product13,
            size: ['S', 'L', 'M', 'XS'],
            price: '50.00',
        },
        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            size: ['S', 'L', 'M', 'XS'],
            img : product14,
            price: '20.00',
        },
        {
            name: 'Maillot Umbro ',
            desc: 'Maillot Pré-Match Raja Club Athletic Umbro ',
            size: ['S', 'L', 'M', 'XS'],
            img : product15,
            price: '20.00',
        },


    ])
    const [basket,setbasket]=useState([])

    return (
        <>
            <MyContext.Provider value={[data, setData , basket,setbasket]} >
                {children}
            </MyContext.Provider>
        </>
    )
}
