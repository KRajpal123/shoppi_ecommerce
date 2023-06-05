import React from 'react'
import './Top.css'
import TopCart from './TopCart'

const TopCate = () => {
  return (
    <>
     <section className='topCate background'>
        <div className="Container">
            <div className="heading d_flex">
                <div className="heading-left row f_flex">
                <i className='fa fa-border-all icon'></i>
                <h2>Top Catagories</h2>
                </div>

                <div className="heading-right row">
                    <span>View All</span>
                    <i className='fa fa-caret-right icon'></i>
                </div>
            </div>
            <TopCart />
        </div>

     </section>
    </>
  )
}

export default TopCate
