import React, {useCallback} from 'react';
import {Checkbox} from "@material-ui/core";

export const UpdateAllComponent = React.memo((props: any) => {

    const onclickHandler = useCallback(() => {
        setTimeout(() => {
            props.onClickHandler()
        }, 1000)
    }, [props.onClickHandler])

    return <div>
       <span>автообновление 5с</span> <Checkbox onClick={onclickHandler}/>
    </div>
})