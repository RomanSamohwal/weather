import React from 'react';
import style from "../features/search/Search.module.css";

export const InputSearch = React.memo((props: any) => {
    return  <div className={style.container}>
        <input type='text' placeholder={'Search city'} onChange={props.onHandlerSearch} value={props.value}/>
        <button onClick = {props.onSearchHandler}>add</button>
        <div className={style.suggestion}>
            {props.flag ? props.citesNewArray : null}
        </div>
    </div>
})