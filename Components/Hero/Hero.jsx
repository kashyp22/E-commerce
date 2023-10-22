import React from 'react'
import './Hero.css'
import hand from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>New Arrivals</h2>
            <div>
                <div className="hand-1-icon">
                    <p>New</p>
                    <img src={hand} alt="" />
                </div>
                <p>collection</p>
                <p>for everyone</p>

            </div>
            <div className="hero-btn">
                <div>Latest collection</div>
                <img src={arrow_icon} alt="" />
            </div>

  
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />

        </div>

    </div>
  )
}

export default Hero