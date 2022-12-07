import React from 'react';

import { Link } from 'react-router-dom';

export const NavHome = () => {
  return (
    <nav className='navHome'>

      <Link className='ancla' to="/">Home</Link>
      <Link className='ancla' to="/Destination">Destination</Link>
      <Link className='ancla' to="/">Expedition</Link>
      <Link className='ancla' to="/">FAQ</Link>

      {/* <Ancla style="ancla" reference="#" textAncla="Home"/>
      <Ancla style="ancla" reference="#" textAncla="Destination"/>
      <Ancla style="ancla" reference="#" textAncla="Expedition"/>
      <Ancla style="ancla" reference="#" textAncla="FAQ"/> */}


    </nav>
  )
}
