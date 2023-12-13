import React from 'react'
import mirror from '../assets/search.svg'

function Searchbar() {
  return (
    <section className='search-bar'>
      <input type="text" placeholder='Search...'/>

      <div>
       <img src={mirror} alt="search-image" />
      </div>

    </section>
  )
}

export default Searchbar