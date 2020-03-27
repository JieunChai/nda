import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import VisitorEach from 'components/Visitors/VisitorEach';

interface Props {
  
}

const VisitorList : React.FC<Props> = () => {
  
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {.map(() => (
        <VisitorEach />
      ))}
    </List>
  );
};

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      maxWidth: '500',
      backgroundColor: green[50]
    },
    inline: {
      display: 'inline'
    },
  }),
);

export { VisitorList };