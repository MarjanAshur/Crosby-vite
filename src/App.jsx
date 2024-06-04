import React from 'react';
import { Route, Routes } from 'react-router-dom';

// components
import Header from './components/Header';
import Home from './components/Home';
import Shop from './components/Shop';
import OurStory from './components/OurStory';
import Journal from './components/Journal';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import JournalFlowerOne from './pages/JournalFlowerOne';
import JournalFlowerTwo from './pages/JournalFlowerTwo';
import ProductPage from './pages/ProductPages';
import Cart from './components/Cart';

// css
import './assets/style/base.css';
import './assets/style/header.css';
import './assets/style/home.css';
import './assets/style/footer.css';
import './assets/style/shop.css';
import './assets/style/story.css';
import './assets/style/contact.css';
import './assets/style/product.css';
import './assets/style/cart.css';
import './assets/style/swiper.css';


// CartContext
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/journalFlowerOne" element={<JournalFlowerOne />} />
        <Route path="/journal/journalFlowerTwo" element={<JournalFlowerTwo />} />
        <Route path="/:productId" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </CartProvider>
  );
}

export default App;
