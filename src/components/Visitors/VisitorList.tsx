import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';

interface Props {
  
}
 
const VisitorList : React.FC<Props> = (children) => {
  
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <List className={classes.list}>
        {children}      
      </List>
    </Container>
  );
};

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      maxWidth: '500',
      backgroundColor: green[50],
    },
    list: {
      width: '80%',
      maxWidth: '400',
      backgroundColor: red[50]
    },
  }),
);

export { VisitorList };
