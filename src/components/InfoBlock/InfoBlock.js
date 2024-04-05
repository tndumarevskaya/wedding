import React from 'react'
import "./InfoBlock.css"
import DateBlock from '../DateBlock/DateBlock'

export default function InfoBlock() {
    return (
        <div className='info-block'>
            <div className='dear-friends-and-family'>
                Дорогие друзья и родные
            </div>
            <span className='important-event'>
                В нашей жизни скоро состоится важное событие - наша свадьба !
            </span>
            <span className='special-day-message'>
                Мы постарались сделать этот день очень особенным и знаменательным для
                нас, ведь это день, о котором мы всегда мечтали! Поэтому сообщаем Вам,
                что мы делаем его мероприятием только для взрослых, так как мы не
                предполагаем развлечений для детей. Просим заранее позаботиться о
                возможности оставить своих деток в надёжных руках ваших родственников
                и друзей, что бы вы смогли полноценно насладиться атмосферой
                свадебного мероприятия.
            </span>
            <DateBlock />
            <span className='special-day'>
                Мы приглашаем Вас разделить с нами этот особенный день!
            </span>
        </div>
    )
}
