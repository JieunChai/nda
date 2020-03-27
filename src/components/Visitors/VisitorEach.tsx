import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  id: number;
  name: string;
  email: string;
  phone: string;
  purpose: string;
  crewName: string;
  image: string;
  datetime: string;
  signature: string;
}

const VisitorEach: React.FC<Props> = ({ name, crewName, image }) => {
  
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="visitor" src={image} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={crewName}
    />
  </ListItem>
  );  
};

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      width: '100%',
      maxWidth: '500',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }),
);

export default { VisitorEach };