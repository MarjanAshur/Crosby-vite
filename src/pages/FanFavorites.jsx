import React from 'react'
//images
import Lil from '../assets/images/Ecomm_02_Lily_004.jpg'
import Bigger from '../assets/images/image.jpg'
import Low from '../assets/images/image.jpg'


const FanFavorites = () => {
  return (
    <section className="fan-favorites-section">
      <h2>Fan Favorites</h2>
      <div className=" container favorites-container">
        <div className="favorite-item">
          <img src={Lil} alt="Lil' Guys" />
          <h3>Lil' Guys</h3>
          <button>Buy Now</button>
        </div>
        <div className="favorite-item">
          <img src={Bigger} alt="Bigger Statements" />
          <h3>Bigger Statements</h3>
          <button>Buy Now</button>
        </div>
        <div className="favorite-item">
          <img src={Low} alt="Low Maintenance" />
          <h3>Low Maintenance</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </section>
  )
}

export default FanFavorites
