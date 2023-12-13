import React from 'react'

function RoundImg({ photo }) {
  return (
    <section 
    style={{
        border: '1px solid black', height: '40px', width: '40px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            
        <img src={photo} alt="" />
    </section>
  )
}

export default RoundImg