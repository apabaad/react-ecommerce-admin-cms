import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useSelector((state) => state.user);
  return (
    <Route
      {...rest}
      render={(
        { location } //location comes from ...rest and gives the link of page where we visited form
      ) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
