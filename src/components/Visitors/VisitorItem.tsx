import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Visitor } from 'models/Visitor';

interface Props {
  each: Visitor
}

const VisitorItem: React.FC<Props> = ({each}) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="visitor" src={each.image} />
      </ListItemAvatar>
      <ListItemText
      primary={each.name}
      secondary={each.crewname}
      />
      {each.purpose}
    </ListItem>
  )
};

export default VisitorItem;
