import { Link } from 'react-router-dom'
//icons
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF ,FaTwitter} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
    <div className="container footer-container">
      <div className="footer-section">
        <h4>Crosby</h4>
        <p>Made with <Link to ='/'>Squarespace</Link></p>
      </div>
      <div className="footer-section">
        <ul className="footer-nav">
          <li><Link to="/shop">Shop</Link></li>
          <li><Link to="/our-story">Our Story</Link></li>
          <li><Link to="/journal">Journal</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-social">
          <li><Link to="https://instagram.com"><FaInstagram /></Link></li>
          <li><Link to="https://facebook.com"><FaFacebookF/></Link></li>
          <li><Link to="https://twitter.com"><FaTwitter/></Link></li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer
