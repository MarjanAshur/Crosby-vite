// // import React from 'react'

// // import { NavLink, Link } from 'react-router-dom'
// // import { FaInstagram } from "react-icons/fa6";
// // import { FaFacebookF ,FaTwitter, FaShoppingCart} from "react-icons/fa";

// // const Header = () => {
// //   return (
// //     <header className="header">
// //       <div className="container header-container">
// //         <div className="logo">
// //           <Link to="/">Crosby</Link>
// //         </div>
// //         <nav className='nav'>
// //       <ul className='nav-list'>
// //         <li>
// //           <NavLink to="/shop" activeClassName="active">
// //             Shop
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/our-story" activeClassName="active">
// //             Our Story
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/journal" activeClassName="active">
// //             Journal
// //           </NavLink>
// //         </li>
// //         <li>
// //           <NavLink to="/contact" activeClassName="active">
// //             Contact
// //           </NavLink>
// //         </li>
// //       </ul>
// //     </nav>
// //         <div className="actions">
// //           <div className="social">
// //            <Link className='social-link' to= 'https://facebook.com'><FaInstagram /></Link>
// //            <Link to= 'https://facebook.com' className='social-link'><FaFacebookF/></Link>
// //            <Link to= 'https://twitter.com' className='social-link'><FaTwitter/></Link>
// //           </div>
// //           <div className="cart">
// //             <Link to="/cart" className="cart-link">
           
// //               <FaShoppingCart />
// //             </Link>
// //           </div>
// //         </div>
// //       </div>
// //     </header>

       
// //   )
// // }

// // export default Header



// import React, { useState, useEffect } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import { FaInstagram, FaFacebookF, FaTwitter, FaShoppingCart } from "react-icons/fa";


// const Header = () => {
//   const [showHeader, setShowHeader] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   const controlHeader = () => {
//     if (window.scrollY > lastScrollY) {
//       setShowHeader(false);
//     } else {
//       setShowHeader(true);
//     }
//     setLastScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', controlHeader);
//     return () => {
//       window.removeEventListener('scroll', controlHeader);
//     };
//   }, [lastScrollY]);

//   return (
//     <header className={`header ${showHeader ? 'show' : 'hide'}`}>
//       <div className="container header-container">
//         <div className="logo">
//           <Link to="/">Crosby</Link>
//         </div>
//         <nav className='nav'>
//           <ul className='nav-list'>
//             <li>
//               <NavLink to="/shop" activeClassName="active">
//                 Shop
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/our-story" activeClassName="active">
//                 Our Story
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/journal" activeClassName="active">
//                 Journal
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact" activeClassName="active">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//         <div className="actions">
//           <div className="social">
//             <Link className='social-link' to='https://instagram.com'><FaInstagram /></Link>
//             <Link to='https://facebook.com' className='social-link'><FaFacebookF /></Link>
//             <Link to='https://twitter.com' className='social-link'><FaTwitter /></Link>
//           </div>
//           <div className="cart">
//             <Link to="/cart" className="cart-link">
//               <FaShoppingCart />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;






import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaTwitter, FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);

  const controlHeader = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? 'show' : 'hide'} ${isTop ? 'top' : ''}`}>
      <div className="container header-container">
        <div className="logo">
          <Link to="/">Crosby</Link>
        </div>
        <nav className='nav'>
          <ul className='nav-list'>
            <li>
              <NavLink to="/shop" >
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/our-story" >
                Our Story
              </NavLink>
            </li>
            <li>
              <NavLink to="/journal" >
                Journal
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="actions">
          <div className="social">
            <Link className='social-link' to='https://instagram.com'><FaInstagram /></Link>
            <Link to='https://facebook.com' className='social-link'><FaFacebookF /></Link>
            <Link to='https://twitter.com' className='social-link'><FaTwitter /></Link>
          </div>
          <div className="cart">
            <Link to="/cart" className="cart-link">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
