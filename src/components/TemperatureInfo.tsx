import React from 'react'

export const TemperatureInfo = (props: any) => {
    return <div style={{border: '1px solid black', width: '200px'}}>
      <h2>{props.name}</h2>
       {props.temp} C°
    </div>
}