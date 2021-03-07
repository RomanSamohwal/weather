import React from 'react'
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export const TemperatureInfo = (props: any) => {
    return <Card  style={{margin: '10px', width: '30vw'}}>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
               {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.temp} C°
                </Typography>
        </CardContent>
    </Card>
}

