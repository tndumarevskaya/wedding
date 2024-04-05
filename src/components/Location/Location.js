import React from 'react'
import "./Location.css"
import map from "../../assets/images/map.png"

export default function Location() {
  return (
    <div className='location'>
        <div className='right-side'>
            <span className='location-title'>LOCATION</span>
            <span className='location-text'>Мы будем ждать Вас по адресу:</span>
            <span className='address'>
            г. Нижний Новгород, наб. Гребного канала, 109, стр. 1, шатер Волжский
            </span>
        </div>
        <img className='map' src={map} alt='map'/>
    </div>
  )
}
