import React from 'react'
import "./Questions.css"

export default function Questions() {
  return (
    <div className='questions'>
        <span className='title'>QUESTIONS</span>
        <span className='answer-questions'>
            Просим Вас ответить на пару вопросов
        </span>
        <div class="question-container">
            <label class="question-text" for="beverage-preference">
                Что Вы предпочитаете из напитков?
            </label>
            <div class="options">
                <div class="option">
                    <input type="checkbox" id="sparkling" name="beverage" value="sparkling" />
                    <label class="option-text" for="sparkling">Игристое</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Водка</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Красное вино</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Виски</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Белое вино</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Коньяк</label>
                </div>
                <div class="option">
                    <input type="checkbox" id="vodka" name="beverage" value="vodka" />
                    <label class="option-text" for="vodka">Безалкогольные напитки</label>
                </div>
            </div>
        </div>
        <div class="confirmation">
            <div class="confirm-presence">
                Пожалуйста, подтвердите свое присутствие до 01.08.2024 любым удобным способом
            </div>
            <div class="input-fields">
                <div class="input-field">
                    <input type="text" id="full-name" name="full-name" placeholder='Ваше имя и фамилия' required />
                </div>
                <div class="input-field">
                    <input type="text" id="phone-number" name="phone-number" placeholder='Номер телефона' required />
                </div>
            </div>
            <div class="attendance-option">
                <div class="option">
                    <input type="radio" id="able-to-attend" name="attendance" value="able" required />
                    <label class="option-text" for="able-to-attend">Я смогу придти</label>
                </div>
                <div class="option">
                    <input type="radio" id="able-to-attend" name="attendance" value="able" required />
                    <label class="option-text" for="able-to-attend">Я не смогу придти</label>
                </div>
            </div>
            <div class="send-button">
                <button type="submit">Отправить</button>
            </div>
        </div>
    </div>
  )
}
