import React from 'react'
import Ndata from './Ndata'
import './New.css'
const Ncart = () => {
  return (
    <>
      <div className="content grid product">
        {
            Ndata.map((val,index)=>
            {
                return(
                    <div className="box">
                        <div className="img">
                            <img src={val.cover} alt="" />
                        </div>
                        <h4>{val.name}</h4>
                        <span>{val.price}</span>
                    </div>
                )
            })
        }
      </div>
    </>
  )
}

export default Ncart
