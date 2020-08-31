import React, { Component, Fragment } from 'react';
import { Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    
    <Route {...rest} render={(props) => (
        localStorage.getItem('token').length >10
        ?  <Component {...props} />
        :  <Redirect to='/login' />
    )} />
  )
  export default PrivateRoute;
/*export class PrivateRoute extends Component {
    render() {


        return (
            <Fragment>
                <Route
                    {...this.props}
                    render={props => (
                        <Component {...props} />
                    )}
                />

            </Fragment>
        )
    }
}
export default PrivateRoute;
*/