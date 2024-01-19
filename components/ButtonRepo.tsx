import React from 'react'

const ButtonRepo = ({styles, txt, click, type}: any) => {
  return (
    <button type={type} onClick={click} className={`${styles}  font-medium  rounded-lg`}>{txt}</button>
  )
}

export default ButtonRepo