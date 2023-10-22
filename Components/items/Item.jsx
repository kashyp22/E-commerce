import React from 'react'
import  './item.css'


const Item = (props) => {

const HandleClick=(()=>{
  

}
)

  return (
    <div>
        <div className="item">
            <img src={props.image} alt="" />
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                   from ₹{props.new_price}
                </div>
                <div className="item-price-old">
                 from ₹{props.old_price}
                </div>
                
                
            </div>
            <div className="cart-adding">
                  <button onClick={HandleClick}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Item