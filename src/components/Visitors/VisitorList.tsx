import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Container, List } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import VisitorEach from 'components/Visitors/VisitorEach';
import { VisitorState } from 'modules/visitor';

interface Props {
  visitor: VisitorState
}
 
const VisitorList : React.FC<Props> = (Props) => {
  
  const classes = useStyles();
  
  const visitorsInfo = Props.visitor.visitors;

  const visitorList = (visitorsInfo && visitorsInfo.map(each => each ? (
    <VisitorEach
      key={each.id}
      name={each.name}
      crewName={each.crewName}
      purpose={each.purpose}
      image={each.image}
    />
  ) :  null));

  console.log(visitorList);
  return (
    <Container className={classes.root}>
      <List className={classes.list}>
        {visitorList}      
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
