import React, { Component, Fragment } from 'react';
import { Route, Redirect} from 'react-router-dom';

const SupplierPrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={(props) => (
        localStorage.getItem('token').length >10 && localStorage.getItem('type') == 'Seller'
        ?  <Component {...props} />
        :  <Redirect to='/login' />
    )} />
  )
  export default SupplierPrivateRoute;