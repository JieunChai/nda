import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  name: string;
  crewName: string;
  purpose: string;
  image: string;
}

const VisitorEach: React.FC<Props> = ({ name, crewName, purpose, image }) => {
  
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
    {purpose}
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

export default React.memo(VisitorEach);