import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {ButtonComponent} from '../button/Bytton';
import {useDispatch} from 'react-redux';
import {deleteCityWeather, updateWeather} from '../../bll/weather-reducer';
import {deleteCity} from '../../bll/cities-reducer';
import style from '../../common/css/Common.module.css'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 420,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
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

export const RecipeReviewCard = (props: any) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const onUpdateHandler = () => {
        dispatch(updateWeather({id: props.data.id, city: props.data.name}))
    }

    const onDeleteHandler = () => {
        dispatch(deleteCityWeather({id: props.data.id}))
        dispatch(deleteCity({id: props.data.id}))
    }
    return (
        <Card className={classes.root} style={{margin: '10px'}}>
            <CardHeader
                title={props.data.name}
            />
            <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Температура: <img
                    src={`https://openweathermap.org/img/w/${props.data.icon}.png`}/> {props.data.temp} C°
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Влажность : {props.data.humidity}%
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Атмосферное давление : {props.data.pressure} мм.рт.ст
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Сила и направление ветра : {props.data.wind} м/с <ArrowUpwardIcon
                    style={{transform: `rotate(${props.data.deg}deg)`}}/>
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    Последнее обновление данных :
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                    {props.data.date}
                </Typography>
            </CardContent>

            <CardActions disableSpacing>
                <div className={style.container}  style={{justifyContent: 'space-between'}}>
                    <ButtonComponent onClickHandler={onDeleteHandler} title={'удалить'} color={'secondary'}/>
                    <ButtonComponent onClickHandler={onUpdateHandler} title={'обновить'} color={'primary'}/>
                </div>
            </CardActions>
        </Card>
    );
}