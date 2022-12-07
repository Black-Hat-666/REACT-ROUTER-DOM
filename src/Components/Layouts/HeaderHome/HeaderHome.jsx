import React from 'react';

import { NavHome } from '../../UI/NavHome/NavHome';
import { ButtonHome } from '../../UI/ButtonHome/ButtonHome';
import { ImgHome } from '../../UI/ImgHome/ImgHome';

import logo from '../../../Images/logoTravely.png';

export const HeaderHome = () => {
  return (
    <header className='headerHome'>
      <ImgHome style="img-logo" routeImg={logo} altText="Logo principal"/>
      <NavHome />
      <ButtonHome />
    </header>
  )
}
