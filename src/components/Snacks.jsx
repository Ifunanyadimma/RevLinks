import { useState, useEffect, useContext } from "react";
import LogoImage from "../assets/Logo.png";
import JKImage from "../assets/JK.png";
import SearchIcon from "../assets/Search.png";
import PlayStoreImage from "../assets/PlayStore.png";
import PhoneMenuImage from "../assets/PhoneMenu.png";
import PhoneImage from "../assets/Phone.png";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";




const Snacks = () => {
  const [search, setSearch] = useState("");
  // const { addToCart } = useCart(); 
  const {addToCart, cartItems} = useContext (CartContext)
  const [fetchedSnacks, setFetchedSnacks] = useState([]); 
  const [loading, setLoading] = useState(true);
  const route = useNavigate();

  const categories = ["Snacks", "Pastries", "Drinks", "Food", "Others"];

  console.log(cartItems);

  
  

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchSnacks = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setFetchedSnacks(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSnacks();
  }, []);

  if (loading) {
    return <p>Loading productss...</p>; 
  }

  return (
    <div className="container">
      <div className="searchBar">
        <img src={LogoImage} alt="Logo" className="logo" />
        <div className="searchInputWrapper">
          <img src={SearchIcon} alt="Search" className="searchIcon" />
          <input
            type="text"
            placeholder="Search in products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchInput"
          />
        </div>
        <img src={JKImage} alt="JK" className="jkImage" />
      </div>
      <div className="content">
        <aside className="categories">
          <h4>More Categories</h4>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </aside>

        <p>Categories &gt;</p>
        <h4>Products</h4>

        <h3 className="topic">Snacks</h3>

        <div className="product-list">
          {/* Display dynamically fetched snacks */}
          {fetchedSnacks.map((item) => (
            <div key={item.id} className="product-item">
              <img src={item.image} alt={item.title} className="product-image" />
              <h5>{item.title}</h5>
              <p>₦{(item.price * 1000).toLocaleString()}</p>
              <button onClick={() => {
                addToCart(item);
                route('/order');
              }}>Add to Order</button>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        <h3> Order Food </h3>
        <div className="footer-text">
          <span> Make ordering food easier with </span>
          <span>our mobile app. You can get it on </span>
          <span> the google play store.</span>
        </div>
        <img
          src={PlayStoreImage}
          alt="Play Store"
          className="play-store-image"
        />

        <img 
         src={PhoneMenuImage} 
         alt="Phone" 
         className="phone-menu" />

        <img src={PhoneImage} alt="Phone" className="phone" />
      </div>

    </div>
  );
};

export default Snacks;


