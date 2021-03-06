import React from 'react'
import {WeathersInfo} from '../../components/WeatherInfo'

export const WeathersDisplayContainer = React.memo((props : any) => {

    return <div style={{display: "flex", justifyContent: "center"}}>
        {props.cities.length > 0 ? props.cities.map((id: number) => <WeathersInfo data={props.weathers[id]} key={id}/>)
                                 : ''}
    </div>
})