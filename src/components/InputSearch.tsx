import React from 'react';
import style from "../features/search/Search.module.css";
import {Input} from "@material-ui/core";
import {ButtonComponent} from "./button/Bytton";

export const InputSearch = React.memo((props: any) => {
    return  <div className={style.container}>
        <Input type='text' placeholder={'Search city'} onChange={props.onHandlerSearch} value={props.value}/>
        <ButtonComponent onClickHandler = {props.onSearchHandler} title = {'добавить'} color = {'primary'}/>
        <div className={style.suggestion}>
            {props.flag ? props.citesNewArray : null}
        </div>
    </div>
})