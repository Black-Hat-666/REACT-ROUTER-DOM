import React from 'react'

export const ImgHome = ({style, routeImg, altText}) => {
  return (
    <img className={style} src={routeImg} alt={altText} />
  )
}
