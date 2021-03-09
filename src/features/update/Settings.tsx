import React, {useCallback} from 'react';
import {Checkbox} from '@material-ui/core';
import {UpdateAllComponent} from './UpdateAll';
import style from '../../common/css/Common.module.css'

export const Settings = React.memo((props: any) => {

    const onClickHandler = useCallback(() => {
        props.changeFlag()
    }, [props.changeFlag])

    return <div style={{width: '100vw'}} className={style.container}>
        <div>автообновление 5с <Checkbox onClick={onClickHandler} checked={props.flag}/></div>
        {props.flag && <UpdateAllComponent delay = {5}/>}
    </div>
})
