import React from 'react'
import logo from '../assets/triton-fakelogo.png'

function Logo() {
  return (
    <section className='logoImg'>

      <img src={logo} alt=""  />

      <div>
       <p>Fake store</p>

      </div>
      
    </section>
  )
}

export default Logo