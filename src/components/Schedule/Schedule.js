import React from 'react'
import "./Schedule.css"
import hearts from "../../assets/images/hearts.png"

export default function Schedule() {
  return (
    <div className='schedule'>
        <div className='timing-title'>
            <p className='frst-line'>TIMING OF</p> 
            <p className='scnd-line'>THE DAY</p>
        </div>
        <div className='events'>
            <img src={hearts} alt='hearts'/>
            <div className='events-timing'>            
                <p>15:30 - Сбор гостей</p>
                <p>16:00 - Церемония</p>
                <p>17:00 - Начало банкета</p>
                <p>23:00 - Окончание торжества</p>
            </div>
        </div>
    </div>
  )
}
