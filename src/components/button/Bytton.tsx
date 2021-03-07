import React from 'react';
import Button from '@material-ui/core/Button';

export const ButtonComponent = React.memo((props: any) => {
    return <Button
        onClick={props.onClickHandler}
        type="button"
        variant='contained'
        color={props.color}>
        {props.title}
    </Button>
})