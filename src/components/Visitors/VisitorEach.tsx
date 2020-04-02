import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

interface Props {
  name: string;
  crewname: string;
  purpose: string;
  image: string;
}

const VisitorEach: React.FC<Props> = ({ name, crewname, purpose, image }) => {
  
  const classes = useStyles();
  console.log("visitoreach");
  return (
    <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt="visitor" src={image} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={crewname}
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