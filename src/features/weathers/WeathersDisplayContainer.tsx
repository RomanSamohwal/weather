import React from 'react'
import {RecipeReviewCard} from "../../components/card/Cards";

export const WeathersDisplayContainer = React.memo((props : any) => {

    return <div style={{display: "flex", justifyContent: "center"}}>
        {props.cities.length > 0 ? props.cities.map((id: number) => <RecipeReviewCard data={props.weathers[id]} key={id}/>)
                                 : ''}
    </div>
})