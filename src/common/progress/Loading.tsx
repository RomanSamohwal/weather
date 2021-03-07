import React from 'react';
import {CircularProgress} from '@material-ui/core';
import style from './Loading.module.css'

export const Loading = () => {
    return <div className={style.progress}>
                <CircularProgress />
        </div>
}