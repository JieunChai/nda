import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { green } from '@material-ui/core/colors';

interface Props { 
  
}

const VisitorCard: React.FC<Props> = ({ name, purpose, crewName, phone, email, signature, image, datetime }) => {
  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title="Visitor!!"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Name: ${name}
          Purpose: ${purpose}
          Invitor: ${crewName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardMedia
        className={classes.media}
        image={signature}
        title="Signature!!"
      />        
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: ${phone}
            Email: ${email}
            Time: ${datetime}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
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
  }),
);

export { VisitorCard };