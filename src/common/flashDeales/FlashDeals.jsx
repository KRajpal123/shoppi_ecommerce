import React from 'react'
import FlashCard from './FlashCard'

const FlashDeals = ({productItems, addToCart}) => {
  return (
    <>
     <section className='flash background'>
    <div className="Container">
        <div className="f_flex heading">
        <i className='fa fa-bolt color'></i>
        <h1>Flash Deals</h1>
     </div>
     <FlashCard productItems={productItems} addToCart={addToCart}/>
    </div>
     </section>
    </>
  )
}

export default FlashDeals
