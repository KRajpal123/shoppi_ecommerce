import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
        <div className='Container grid1'>
            <div className="box">
                <h1>Rajpal Reddy</h1>
                <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam harum optio, quibusdam officiis odit dolor quidem sunt,
                   quas dicta cum consectetur maxime cumque asperiores alias. A omnis delectus voluptatum? Nihil!
                </p>
                <div className="icon d_flex">
                    <div className="img d_flex">
                        <i className=' fa fa-brands fa-google-play i'></i>
                        <span>Google Play</span>
                    </div>
                    <div className="img d_flex">
                        <i className=' fa fa-brands fa-app-store-ios i'></i>
                        <span>App Store</span>
                    </div>
                </div>
            </div>

            <div className="box">
                <h2>About Us</h2>
                <ul>
                    <li>Careers</li>
                    <li>Our Store</li>
                    <li>Our Care</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy & Policy</li>
                </ul>
            </div>

            <div className="box">
                <h2>Customer Care</h2>
                <ul>
                    <li>Help Center</li>
                    <li>How to Buy</li>
                    <li>Track Your Order</li>
                    <li>Corporate & Bulk Purchasing </li>
                    <li>Returns & Refunds</li>
                </ul>
            </div>

            <div className="box">
                <h2>Contact Us</h2>
                <ul>
                    <li>Washington,Newyork,NY-2023,USA</li>
                    <li>Email: Moobsupport@gmail.com</li>
                    <li>Phone: +1 2345 6789 10</li>
                </ul>
            </div>

        </div>
    </footer>
    </>
  )
}

export default Footer
