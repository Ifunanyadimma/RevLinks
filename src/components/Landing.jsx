import { Fragment, useContext, useState } from 'react';
import LogoImage from '../assets/Logo.png';
import JKImage from '../assets/JK.png';
import SearchIcon from '../assets/Search.png';
import PlayStoreImage from '../assets/PlayStore.png';
import PhoneMenuImage from '../assets/PhoneMenu.png';
import PhoneImage from '../assets/Phone.png';
import { CartContext } from '../context/CartContext';
import ProductModel from './ProductModel';


const Landing = () => {
  const [search, setSearch] = useState('');
  const {cartItems} = useContext (CartContext);

//   const [isModelOpen setIsModelOpen]=useState(false)

//   const handleOpenModel= ()=>{
//     setIsModelOpen((prev)=>!isModelOpen)
//   }
  



//   const handleQuantityChange = (id, delta) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === id
//           ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
//           : item
//       )
//     );
//   };

//   const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <div className="landing-container" onClick={handleOpenModel}> 
      {/* Header Section */}
      <div className="header">
        <img src={LogoImage} alt="Logo" className="logo-image" />
        <img src={JKImage} alt="JK" className="jk-image" />
      </div>

      {/* Search Section */}
      <div className="rectangular-line">
        <span className="line-text">Explore all the Food</span>
        <span className="line-text">from our Cafeteria</span>
        <div className="search-line">
          <div className="searchInputWrapper2">
            <img src={SearchIcon} alt="Search" className="search-icon" />
            <input
              type="text"
              placeholder="Search anything here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="searchInput"
            />
          </div>
        </div>
      </div>

      <h3 className='order-title'>Order Again</h3>

      {/* Order Section */}
      <div className='cartContainer'>
        <div className='cartItems'>
            <div className='cartList'>
                {cartItems.map((item) => {
                    return (
                        <Fragment key={item.id}>
                            <div className='cartItem'>
                                <img src={item.image} alt={item.name} className='cartItemImage' />
                                <h5>{item.title}</h5>
                                <p>₦{(item.price).toLocaleString()}</p>
                            </div>
                        </Fragment> 
                    )
                })}
            </div>
        </div>
        <ProductModel />
        <div className='cartSummary'></div>

      </div>
      

      {/* Categories Section */}
      <h4 className="categories-title">Categories</h4>
      <div className="categories2">
        <ul>
          <li>Food</li>
          <li>Drinks</li>
          <li>Snacks</li>
          <li>Pastries</li>
        </ul>
      </div>

      {/* Footer Section */}
      <div className='footer'>
        <h3> Order Food </h3>
        <div className='footer-text'>
        <span> Make ordering food easier with   </span>
          <span>our mobile app. You can get it on </span>
          <span> the google play store.</span>
        </div>
         <img 
          src={PlayStoreImage} 
          alt='Play Store' 
          className='play-store-image' 
         />

        <img 
         src={PhoneMenuImage} 
         alt='Phone' 
         className='phone-menu' 
        />

        <img 
         src={PhoneImage} 
         alt='Phone' 
         className='phone' 
        /> 
      </div>
      
    </div>
  );
};

export default Landing;
