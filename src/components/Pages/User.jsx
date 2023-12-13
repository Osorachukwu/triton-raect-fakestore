import React from 'react'
import user from '../../assets/user.svg'
import RoundImg from '../RoundImg'

function User() {
  return (
    <section>
      <RoundImg photo={user}/>
    </section>
  )
}

export default User