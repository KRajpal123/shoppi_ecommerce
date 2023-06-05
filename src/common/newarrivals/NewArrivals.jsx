import React from 'react'
import Ncart from './Ncart'
import './New.css'
const NewArrivals = () => {
  return (
    <>
      <section className='Newarrivals background'>
        <div className="Container">
            <div className="heading d_flex">
                <div className="heading-left row f_flex">
                <img src='https://img.icons8.com/glyph-neue/64/26e07f/new.png' />
                <h2>New Arrivals</h2>
                </div>

                <div className="heading-right row">
                    <span>View All</span>
                    <i className='fa fa-caret-right icon'></i>
                </div>
            </div>
           <Ncart/>
        </div>

     </section>
        
    </>
  )
}

export default NewArrivals
