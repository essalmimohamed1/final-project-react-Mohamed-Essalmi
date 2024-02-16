import { Home } from './pages/Home/home.jsx';
import { Header } from './layouts/header.jsx';
import { Footer } from './layouts/footer.jsx';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About/About.jsx';
import { Contact } from './pages/Contact/Contact.jsx';
import { MyProvider } from './utils/contextProvider.jsx';
import { Shop } from './pages/Shoppage/Shop.jsx';
import { Products } from './pages/product/product.jsx';
import { Signup } from './pages/Signup/Signup.jsx';
import { Logain } from './pages/Logain/Logain.jsx';
import { Addcart } from './pages/Addcart/Addcart.jsx';


function App() {
    return (
        <>
        <Header/>
        <MyProvider>
            <Routes >
                <Route path='/' element={<Home />} />
                <Route path='/About' element={<About />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/Signup' element={<Signup />} />
                <Route path='/Logain' element={<Logain />} />
                <Route path='/Addcart' element={<Addcart />} />
                <Route path='/product/:name' element={<Products />} />
            </Routes >
        </MyProvider>
        <Footer/>
        </>
    );
}

export default App;
