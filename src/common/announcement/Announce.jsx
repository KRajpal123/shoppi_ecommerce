import React from 'react'

const Announce = () => {
    const Mystyle = {
        width:"30%",
        height:"340px"
    }
    const Mystyle1 = {
        width:"68%",
        height:"340px",
    }
  return (
    <>
      <section className='announce background'>
        <div className="Container d_flex">
            <div className="announcement">
                <img src="https://static.vecteezy.com/system/resources/previews/005/412/355/original/big-sale-up-to-30-percent-off-all-sale-styles-in-stores-and-online-special-offer-sale-30-percent-number-tag-voucher-illustration-free-vector.jpg"/>
            </div>
            <div className="announcement1">
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-simple-business-information-mobile-phone-image_21241.jpg"/>
            </div>
        </div>

      </section>
    </>
  )
}

export default Announce
