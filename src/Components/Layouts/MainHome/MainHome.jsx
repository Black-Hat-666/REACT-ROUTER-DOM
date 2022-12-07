import React from 'react'

import { ImagesContainer } from '../../UI/ImageContainer/ImageContainer'
import { LogosMain } from '../../UI/LogosMain/LogosMain'
import { H2Home } from '../../UI/H2Home/H2Home'
import { AsideHome } from '../AsideHome/AsideHome';
import { ImgHome } from '../../UI/ImgHome/ImgHome'

import image1 from '../../../Images/wallpaper.jpg'
import image2 from '../../../Images/wallpaper2.jpg'

export const MainHome = () => {
  return (
    <main className='main-Content'>
        <H2Home style="firstTitle" textMain="READY EXPLORE THE BEAUTY OF WONDERFUL WORD" />
        <ImgHome style="img-Main" routeImg={image1} altText="Primer imagen"/>
        <LogosMain />
        <ImagesContainer />
        <H2Home style="secondTitle" textMain="We Provide Expedition Rare Experience" />
        <ImgHome style="img-Main2" routeImg={image2} altText="Segunda imagen"/>
        <AsideHome />
    </main>
  )
}
