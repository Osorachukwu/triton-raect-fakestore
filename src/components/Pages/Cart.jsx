import React from 'react'
import cart from '../../assets/cart.svg'
import RoundImg from '../RoundImg'

function Cart() {
  return (
    <section className='relative'>

      <RoundImg photo={cart}/>

      <div className='bg-red-500 flex justify-center items-center absolute 
      top-0
       -right-2 
       px-1 rounded'>0</div>

    </section>
  )
}

export default Cart