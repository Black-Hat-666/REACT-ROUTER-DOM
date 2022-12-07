import React from 'react'

import { H2Home } from '../../UI/H2Home/H2Home'
import { ImgHome } from '../../UI/ImgHome/ImgHome'
import { ParagraphMain } from '../../UI/ParagraphMain/ParagraphMain'

import image from '../../../Images/imageAside.jpeg';

export const AsideHome = () => {
  return (
    <aside className='asideHome'>
        <H2Home style="thirdTitle" textMain="Maybe any question, check this out" />
        <ParagraphMain />
        <ImgHome style="imgAside" routeImg={image} altText="Imagen de mi Aside"/>
    </aside>
  )
}
