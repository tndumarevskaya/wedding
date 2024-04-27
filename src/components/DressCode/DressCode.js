import React from 'react'
import "./DressCode.css"

export default function DressCode() {
  return (
    <div className='dress-code'>
        <span className='title'>DRESS CODE</span>
        <div className='colors'>
            <div className='dark-pink' />
            <div className='lighter-pink' />
            <div className='powder-pink' />
            <div className='peach' />
            <div className='lightest-pink' />
        </div>
        <span className='color-guidelines'>
            Будем признательны если при выборе нарядов <br/>
            Вы придержитесь цветовой  гаммы нашего торжества
        </span>
    </div>
  )
}

