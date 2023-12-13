import React from 'react'
import Cart from './Pages/Cart'
import User from './Pages/User'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'

function CartUserSign() {
  return (
    <section className='cartUser'>
        <Cart />
        <User />
        
        <div className='cartUser__sect2'>
          <p>Welcome</p>

          <div>
            <Signin /> 
            |
            <Signup />
          </div>
        </div>

    </section>
  )
}

export default CartUserSign