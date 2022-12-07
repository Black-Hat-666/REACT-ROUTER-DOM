import React from 'react'

export const Ancla = ({style,reference,textAncla}) => {
  return (
    <a className={style} href={reference}>{textAncla}</a>
  )
}
