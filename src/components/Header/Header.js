import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <span className='invitation-text'>ПРИГЛАШЕНИЕ НА СВАДЬБУ</span>
        <div className='names'>
            <span className='and'>&</span>
            <span className='evgeny'>Евгений</span>
            <span className='alexandra'>Александра</span>
        </div>
    </div>
  )
}
