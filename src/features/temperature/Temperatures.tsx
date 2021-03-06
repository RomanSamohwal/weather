import React, {useMemo} from 'react'
import { TemperatureInfo } from '../../components/TemperatureInfo'
import { MaxMinTemperature } from '../../utils/maxMinTemperature'

export const Temperatures = React.memo((props: any) => {

    const arr_max_min = useMemo(() => {
       return MaxMinTemperature(props.weathers)
    }, [props.weathers])
    console.log(arr_max_min)
    return <div style={{display: "flex", justifyContent: "center"}}>
        <TemperatureInfo name = {arr_max_min[0]?.name} temp = {arr_max_min[0]?.temp_max}/>
        <TemperatureInfo name = {arr_max_min[1]?.name} temp = {arr_max_min[1]?.temp_max} />
    </div>
})