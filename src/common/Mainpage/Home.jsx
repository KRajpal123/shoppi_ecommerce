import React from 'react'
import Catagories from './Catagories'
import Slider from './Slider'
import "./Home.css"
const Home = () => {
  return (
    <>
    <section className='home'>
        <div className="Container d_flex">
        {/* <Catagories /> */}
        <Slider />
        </div>

    </section>
    </>
  )
}

export default Home
