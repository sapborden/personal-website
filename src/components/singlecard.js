import React from "react"
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import cardStyles from "./singlecard.module.css"
import CardMedia from '@material-ui/core/CardMedia'


export default function SingleCard(props) {
  
    return (
      <Card className={cardStyles.root}>
        <CardMedia
            className={cardStyles.media}
            image={props.cardImg}
            title="Book"/>
        <CardContent>
        <CardActions>
          <Button><p className={cardStyles.title}>{props.cardTitle}</p></Button>
        </CardActions>
        <Typography className={cardStyles.author}>
          {props.author}
        </Typography>
        </CardContent>
      </Card>
    );
  }