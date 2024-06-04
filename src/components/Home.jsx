import {useState} from 'react'

//pages
import TheJournal from '../pages/TheJournal'
import FanFavorites from '../pages/FanFavorites'

//image
import Gift from '../assets/images/giftcard-template.jpg'

const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (<main>
    <section className="home-section">
      <div className="hero">
        <h1>Plants and Pots <br />
        For Your Home</h1>
        <button className="shop-now">Shop Now</button>
      </div>
    </section>
<FanFavorites/>
    <section className='imagesSection'>

    </section>
<TheJournal  showParagraphs={true}/>
    <section className="newsletter-section">
      <h2>They grow up so fast.</h2>
      <p>Don’t miss a thing. Sign up to receive news and updates.</p>
      {!submitted ? (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email Address" required />
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <p className="thank-you">Thank you!</p>
      )}
    </section>
    <section className="gift-card-section">
    <div className='gift-card-con'>
    <img src={Gift} alt="" />
       <div className='gift-card-text'>
       <h2>Give the Gift of Greenery</h2>
      <p>Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!</p>
      <button>Purchase a Gift Card</button>
    </div>
    </div>
   
     
    </section>
    </main>
  )
}

export default Home
