import React from 'react'

const Scat = () => {

        const data = [
          {
            cateImg: "./images/category/cat-1.png",
            cateName: "Apple",
          },
          {
            cateImg: "./images/category/cat-2.png",
            cateName: "Samasung",
          },
          {
            cateImg: "./images/category/cat-1.png",
            cateName: "Oppo",
          },
          {
            cateImg: "./images/category/cat-2.png",
            cateName: "Vivo",
          },
          {
            cateImg: "./images/category/cat-1.png",
            cateName: "Redimi",
          },
          {
            cateImg: "./images/category/cat-2.png",
            cateName: "Sony",
          },
        ]
  return (
    <>
    <div className="catagory">
        <div className="chead d_flex">
            <h1>Brands</h1>
            <h1>Shops</h1>
        </div>
        {
            data.map((val,index)=>{
                return(
                    <div className="box f_flex">
                        <img src={val.cateImg} alt="" />
                        <span>{val.cateName}</span>
                    </div>
                )
            })
        }
         <div className="box box2">
            <button>View All Brands</button>
        </div>
    </div>
    </>
  )
}

export default Scat
