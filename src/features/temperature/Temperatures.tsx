import React, {useMemo} from 'react'
import {TemperatureInfo} from '../../components/temperature/TemperatureInfo'
import {MaxMinTemperature} from '../../utils/maxMinTemperature'
import style from '../../common/css/Common.module.css'

export const Temperatures = React.memo((props: any) => {

    const arr_max_min = useMemo(() => {
        return MaxMinTemperature(props.weathers)
    }, [props.weathers])

    return <div className={style.container}>
        {arr_max_min[0]!== undefined && arr_max_min.length > 0 ?
             <><TemperatureInfo name={arr_max_min[0]?.name}
                                temp={arr_max_min[0]?.temp_max}
                                title={'максимальная'}/>
               <TemperatureInfo name={arr_max_min[1]?.name}
                                temp={arr_max_min[1]?.temp_max}
                                title={'минимальная'}/></>
                                                               :
            ''}
    </div>
})