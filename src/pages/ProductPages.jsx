import React, {useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Shop from '../components/Shop';
import { useCart } from '../context/CartContext';
import ShopDb from '../db/ShopDb';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

const ProductPage = () => {
  const { productId } = useParams();
  const product = ShopDb.find(item => item.id === parseInt(productId));
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [price, setPrice] = useState(product.price);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    if (size === "Small") {
      setPrice(product.price);
    } else if (size === "Medium") {
      setPrice(product.price + 5);
    } else if (size === "Large") {
      setPrice(product.price + 10);
    }
  };

  const handleBuyNow = () => {
    const productToAdd = { ...product, price };
    addToCart(productToAdd);
    navigate('/cart');
  };

  return (
    <main className='product-sec'>
    <section className="product-page">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className='product-images'><img  className='products-images' src={product.image} alt={product.name} /></SwiperSlide>
        <SwiperSlide className='product-images'><img  className='products-images' src={product.image2} alt={product.name} /></SwiperSlide>
      </Swiper>
     
      <div className="product-details">
        <h1>{product.name}</h1>
        <p className="product-price">from ${price.toFixed(2)}</p>
          <p className="product-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel ultricies metus, at tincidunt arcu. Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.
        </p>
        {product.sizes && (
          <div className="product-sizes">
            <h3>Size:</h3>
            <ul>
              {product.sizes.map((size, index) => (
                <li 
                  key={index} 
                  onClick={() => handleSizeClick(size)}
                  className={selectedSize === size ? 'selected' : ''}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.sale && <p className="product-sale">{product.sale}</p>}
      
        <button className="buy-button" onClick={handleBuyNow}>Add To Cart</button>
      </div>
    </section>
    <h2 className='alsoLike'>You Might Also Like</h2>
    <Shop/>
    </main>
  );
}

export default ProductPage;
