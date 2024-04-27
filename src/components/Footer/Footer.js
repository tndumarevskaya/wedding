import React from 'react'
import "./Footer.css"
import photo from "../../assets/images/footer-photo.png"

export default function Footer() {
  return (
    <div className='footer'>
        <span className='budget-contribution'>
            Мы не хотим обременять Вас выбором подарка, поэтому будем рады вкладу в
            бюджет нашей молодой семьи.
        </span>
        <div className='date-container'>
            <div className='photo-container'>
                <span className='date-time'>
                    10
                    <br />
                    08
                    <br />
                    24
                </span>
                <img className='lower-photo' src={photo} alt='photo'/>
            </div >
            <div className='text-container'>
                <span className='excited-to-see-you'>
                Очень ждем Вас и будем счастливы видеть на нашей свадьбе !
                </span>
                <span className='memorable-day'>
                    И надеемся что этот волшебный день надолго останется у Вас в памяти !
                </span>
            </div>
        </div>
    </div>
  )
}
