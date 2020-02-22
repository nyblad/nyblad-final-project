import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {

  const accessToken = localStorage.getItem('accessToken')

  return (

    // Show the component only when the user is logged in
    // Otherwise, redirect the user to startpage
    <Route {...rest} render={props => (
      accessToken
        ? <Component {...props} />
        : <Redirect to='/' />
    )} />
  );
};