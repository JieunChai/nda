import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Container, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { Visitor } from 'models/Visitor';

interface Props {
  visitorsInfo: Visitor[]
}

const VisitorList : React.FC<Props> = ({visitorsInfo}) => {
  
  const classes = useStyles();

  // const onClickListItem = (index: number) => () => {
  //   moveToCard(index);
  // }

  return (
    <Container className={classes.root}>
      <List className={classes.list}>
      {visitorsInfo && visitorsInfo.map((each: { id: string | number | undefined; name: string; crewname: string; purpose: string; image: string; }) => each ? (
        <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="visitor" src={each.image} />
        </ListItemAvatar>
        <ListItemText
          primary={each.name}
          secondary={each.crewname}
        />
        {each.purpose}
      </ListItem>): null}
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

export default React.memo(VisitorList);
