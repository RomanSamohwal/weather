import React from 'react'
import {RecipeReviewCard} from "../../components/card/Cards";
import {Grid} from "@material-ui/core";

export const WeathersDisplayContainer = React.memo((props : any) => {

    return <Grid container spacing={3} style={{display: 'flex', justifyContent: 'center', flexWrap : 'wrap'}}>
        {props.cities.length > 0 ? props.cities.map((id: number) => <RecipeReviewCard data={props.weathers[id]} key={id}/>)
                                 : ''}
    </Grid>
})
