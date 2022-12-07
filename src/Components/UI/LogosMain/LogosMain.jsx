import React from 'react'

import logo1 from '../../../Images/Logo-Tripadvisor.png';
import logo2 from '../../../Images/traveloka-logo.png';
import logo3 from '../../../Images/logo-brackett.png';
import { ImgHome } from '../ImgHome/ImgHome';

export const LogosMain = () => {
  return (
    <div className='containImgs'>
        <ImgHome style="logo1" routeImg={logo1} altText="Tripadvisor"/>
        <ImgHome style="logo2" routeImg={logo2} altText="Traveloka"/>
        <ImgHome style="logo3" routeImg={logo3} altText="Silhouette"/>
    </div>
  )
}
