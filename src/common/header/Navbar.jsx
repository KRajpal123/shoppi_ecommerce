import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [MobileMenu,setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
        <div className="Container d_flex">
          <div className="catagories c_flex">
          <i className='fa fa-border-all icon-circle'></i>
            <h4>
              Catagories<i className='fa fa-chevron-down icon'></i>
            </h4>
          </div>
          <div className="navlinks">
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={()=>setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/Pages'>Pages</Link>
              </li>
              <li>
                <Link to='/User'>User Account</Link>
              </li>
              <li>
                <Link to='/Vendor'>Vendor Account</Link>
              </li>
              <li>
                <Link to='/Track'>Track My Order</Link>
              </li>
              <li>
                <Link to='/ Contact'>Contact</Link>
              </li>
            </ul>
            <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
              {
                 MobileMenu ? <i className='fas fa-bars close home-btn'></i>:
                 <i class="fa fa-bars open"></i>
              }
               
              
            </button>
          </div>
        </div>

      </header>
    </>
  )
}

export default Navbar
