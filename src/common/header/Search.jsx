import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../image/logo.jpg'



const Search = ( { cartItem }) => {
  window.addEventListener("scroll",function () {
    const search = document.querySelector(".Search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>
     <section className='Search'>
      <div className="Container c_flex">
      <div className="logo width">
        <img src={logo} alt="" />
      </div>
      <div className="Search-box f_flex">
     <i className='fa fa-search' id='icon'></i>
     <input type="text" placeholder='Search and hit enter' />
     <span>All Catagories</span>
      </div>

      <div className="icon f_flex width">
        <div className='icon_circle'> <i className='fa fa-user'></i> </div>
        <div className="cart">
          <Link to = "/cart">
        <div className='icon_circle'><i className='fa fa-shopping-bag '></i></div>
        <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
          </Link>
        </div>

      </div>
      </div>
     </section>
    </>
  )
}

export default Search
