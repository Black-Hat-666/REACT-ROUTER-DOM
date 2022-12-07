import React from 'react'

import imagen1 from '../../../Images/santorini.jpg'
import imagen2 from '../../../Images/orlando-ee-uu.jpg'
import imagen3 from '../../../Images/roma-italia.jpg'
import imagen4 from '../../../Images/tailandia.jpg'
import imagen5 from '../../../Images/croacia.jpg'
import imagen6 from '../../../Images/nueva-york.jpg'

import { ImgHome } from '../ImgHome/ImgHome'
import { H2Home } from '../H2Home/H2Home'


export const ImagesContainer = () => {
  return (
    <div className='gallery-container'>
        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen1} altText="Santorini Beach"/>
          <H2Home style="gallery__title" textMain="Santorini Beach"/>
        </div>
        
        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen2} altText="Orlando, EE.UU"/>
          <H2Home style="gallery__title" textMain="Orlando, EE.UU"/>
        </div>

        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen3} altText="Roma, Italia"/>
          <H2Home style="gallery__title" textMain="Roma, Italia"/>
        </div>

        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen4} altText="Tailandia"/>
          <H2Home style="gallery__title" textMain="Tailandia"/>
        </div>

        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen5} altText="Croacia"/>
          <H2Home style="gallery__title" textMain="Croacia"/>
        </div>

        <div className='gallery__item'>
          <ImgHome style="gallery__img" routeImg={imagen6} altText="Nueva York, EE.UU"/>
          <H2Home style="gallery__title" textMain="Nueva York, EE.UU"/>
        </div>
    </div>
  )
}
