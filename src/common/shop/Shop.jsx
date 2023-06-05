import React from 'react'
import Scat from './Scat'
import ShopCart from './ShopCart'
import './Shop.css'

const Shop = ({shopItems, addToCart}) => {
  return (
    <>
     <section className='shop background'>
        <div className="Container d_flex">
        <Scat />
        <div className="Content">
        <div className="heading d_flex">
                <div className="heading-left row f_flex">
                <h2>Mobile Phones</h2>
                </div>

                <div className="heading-right row">
                    <span>View All</span>
                    <i className='fa fa-caret-right icon'></i>
                </div>
            </div>
            <div className="product-content grid2">
                <ShopCart shopItems={shopItems} addToCart={addToCart} />
            </div>
        </div>
        </div>

     </section>
    </>
  )
}

export default Shop
