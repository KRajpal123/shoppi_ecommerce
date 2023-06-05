import React from 'react'
import Announce from '../announcement/Announce'
import Discount from '../Discount/Discount'
import FlashDeals from '../flashDeales/FlashDeals'
import Home from '../Mainpage/Home'
import NewArrivals from '../newarrivals/NewArrivals'
import Shop from '../shop/Shop'
import TopCate from '../top/TopCate'
import Wrapper from '../Wrapper/Wrapper'


const Pages = ({productItems, cartItem, addToCart , shopItems}) => {
  return (
    <>
      <Home cartItem={cartItem}/>
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate/>
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announce/>
      <Wrapper/>
    </>
  )
}

export default Pages
