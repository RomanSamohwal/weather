import React, {useCallback} from 'react';
import {Checkbox} from "@material-ui/core";

export const UpdateAllComponent = React.memo((props: any) => {

    const onclickHandler = useCallback(() => {
        setTimeout(() => {
            props.onClickHandler()
        }, 1000)
    }, [props.onClickHandler])

    return <div style={{width: '100vw', display: 'flex', justifyContent: 'center'}}>
        <div>автообновление 5с <Checkbox onClick={onclickHandler}/></div>
    </div>
})