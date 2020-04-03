import React from 'react';
import { Button, CssBaseline, TextField, Link, Box, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import imgUrl from 'images/logomin.png';

interface Props {
  onValueChange(e: any): void;
  onClickLogin(): void;
}

const LogIn: React.FC<Props> = ({ onValueChange, onClickLogin }) => {

  const classes = useStyles();

  const onKeyDown = ( e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      onClickLogin();
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img className="logoImage" style={{width : '30%'}} src={imgUrl} alt="logo" />
        <Typography component="h1" variant="h5">
          LOGIN
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="userId"
            label="User ID"
            name="userId"
            autoComplete="username"
            autoFocus
            onChange={onValueChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="pw"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onValueChange}
            onKeyDown={onKeyDown}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            onClick={onClickLogin}
          >
            Log In
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://deepbio.co.kr">
        Deep Bio Inc.
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: green[50]
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default React.memo(LogIn);