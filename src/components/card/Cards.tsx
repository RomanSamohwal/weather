import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 403,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                title="Минск"
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                      Температура: <img src="https://openweathermap.org/img/w/13d.png"/> 27 C°
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                      Влажность : 52%
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                      Атмосферное давление : 1115  мм.рт.ст
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                      Сила и направление ветра : 3.02 м/с <ArrowUpwardIcon style={{transform: "rotate(123deg)"}}/>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    Последнее обновление данных : 4 марта 2021 09:00:00
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
               <div>
                   <Button>add</Button>
                   <Button>add</Button>
               </div>
            </CardActions>
        </Card>
    );
}