import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext';
import drop_down from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/items/Item'

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div>
      {/*  Banner of all men kids and women is  props here   */}

      <div className="shopcategory">
        <img className='shopcategory-banner' src={props.banner} alt="" />

        <div className="shopcategory-indexsort">
          <p>
            <span> Showing 1-12</span> out of 36 products
          </p>

          {           /* drop down symbol  */}


          <div className="shopcategory-sort">
            sort by <img src={drop_down} alt="" />
          </div>
        </div>

        {/* data is dislay here through useContext */}
        <div className="shopcategory_products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            }
            else {
              return null;
            }
          })}
        </div>


      </div>

    </div>
  )
}

export default ShopCategory