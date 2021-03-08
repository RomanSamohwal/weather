import React from 'react';
import style from './Search.module.css';
import {Input, Paper} from '@material-ui/core';
import {ButtonComponent} from '../../components/button/Bytton';

export const InputSearch = React.memo((props: any) => {
    return <div className={style.container}>
        <Input type='text' placeholder={'введите город'} onChange={props.onHandlerSearch} value={props.value}
               style={{margin: '10px'}}/>
        <ButtonComponent onClickHandler={props.onSearchHandler} title={'добавить'} color={'primary'}/>
        <Paper className={style.suggestion}>
            {props.flag ? props.citesNewArray : null}
        </Paper>
    </div>
})