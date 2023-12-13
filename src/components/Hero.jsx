import React from 'react'
import ProductsNav from './ProductsNav'
import PayDay from '../assets/Triton-Pay_day_deals_Slider.jpg'

function Hero() {
  return (
    <section className='hero'>
        <ProductsNav />

        <div className='hero__image'>
         <img src={PayDay} alt="" />
        </div>
    </section>
  )
}

export default Hero