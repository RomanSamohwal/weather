import React from 'react'
import {WeatherObj} from "../bll/weather-reducer";
import ArrowImg from  '../assests/img/arrow.jpg'

type propsType = {
    data: WeatherObj
}

export const WeathersInfo = React.memo((props: propsType) => {
    return <div style={{border: '1px solid black', width: '400px', padding: '5px', margin: '5px'}}>
        <div>город {props.data.name}</div>
        <div>температура {props.data.temp} C°</div>
        <img src={`https://openweathermap.org/img/w/${props.data.icon}.png`}/>
        <img src= {ArrowImg} alt="" style={{width: '10px', height: '10px',
            transform: `rotate(${props.data.deg}deg`}} />
        <div>давление {props.data.pressure} мм.рт.ст</div>
        <div>влажность {props.data.humidity} %</div>
        <div>ветер {props.data.wind} м/c</div>
        <div>дата последнего обновления {props.data.date}</div>
        <button>удалить</button>
        <button>обновить</button>
    </div>
})