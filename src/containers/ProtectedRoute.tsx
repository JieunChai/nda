import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export const ProtectedRoute: React.FC<RouteProps> = (props) => {
  if (localStorage.getItem('user')) {
    return <Route {...props} />
  }else {
    return <Redirect to={{ pathname: '/' }} />
  }
};