import {} from 'react'
import {} from 'react-router-dom';
import LogoImage from '../assets/Logo.png';
import NotificationImage from '../assets/Notification.png';
import AvatarImage from '../assets/Avatar.png';
import ShopImage from '../assets/Shop.png';
import LogsImage from '../assets/Logs.png';
import CategoriesImage from '../assets/Categories.png';
import SettingsImage from '../assets/Setting.png';

const Inventory = () => {
  return (
    <div className='container'>
      <div className='navBar1'>
        <div className='logo'>
        <img src={LogoImage} alt='Logo' className='logo-image' />
        <h4>Administrator</h4>
        <p>Super Admin</p>
          </div>
        <div className='navBar1-Items'>
            <div className='navBar1-Item'>
            <img src={ShopImage} alt='Shop' className='shop-image' />
               <span>Inventory</span>    
            </div>
            <div className='navBar1-Item'>
            <img src={LogsImage} alt='Logs' className='logs-image' />
               <span>Logs</span>
            </div>
            <div className='navBar1-Item'>
            <img src={CategoriesImage} alt='Categories' className='categories-image' />
                <span>Categories</span>
            </div>
            <div className='navBar1-Item'>
            <img src={SettingsImage} alt='Settings' className='settings-image' />
                <span>Settings</span>
            </div>
        </div>
      </div>
      <div className='navBar2'>
        <h4>Inventory</h4>
        <button>Logout</button>
        <img src={NotificationImage} alt='notification' className='bell' />
        <img src={AvatarImage} alt='avatar' className='avatar' />
      </div>
    </div>
  )
}

export default Inventory
