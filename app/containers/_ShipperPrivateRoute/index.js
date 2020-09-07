import React, { Component, Fragment } from 'react';
import { Route, Redirect} from 'react-router-dom';

const ShipperPrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={(props) => (
        localStorage.getItem('token') && localStorage.getItem('token').length >10 && localStorage.getItem('type') == 'Shipper'
        ?  <Component {...props} />
        :  <Redirect to='/login' />
    )} />
  )
  export default ShipperPrivateRoute;