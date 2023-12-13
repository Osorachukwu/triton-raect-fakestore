import React from 'react'
import Logo from './Logo'
import Searchbar from './Searchbar'
import CartUserSign from './CartUserSign'
import Nav from './Nav'

function Header() {
   
  return (
    <section >
      <div className='head'>
        <Logo />
        <Searchbar />
        <CartUserSign />

      </div>

      <hr />

      <Nav />
      
       
    </section>
  )
}

export default Header