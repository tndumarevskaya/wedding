import React from 'react'
import kiss from '../../assets/images/kiss.png'
import "./DateBlock.css"

export default function DateBlock() {
  return (
    <div className='date-block'>
        <img className='kiss-img' src={kiss} alt={"kiss"}/> 
        <div className='left-side'>
          <span className='save-the-date'>SAVE THE DATE</span>
          <span className='date'>10.08.2024</span>
          <span className='family-day'>
              Чудесный день, когда мы станем семьей
          </span>
        </div>
    </div>
  )
}
