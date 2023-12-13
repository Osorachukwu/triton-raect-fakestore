import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import Hero from '../Hero'
import PropularProducts from '../PropularProducts'

function Home() {
  return (
    <section>
        <Header />
        <Hero />
        <PropularProducts />
        
    </section>
  )
}

export default Home