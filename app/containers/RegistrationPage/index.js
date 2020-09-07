import React, { Fragment, Button } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Footer from 'components/Footer/Loadable'
import Registration from 'components/Registration/Loadable'


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Login',
    },
]
const LoginPage = () => {

    return (
        <Fragment>

                <Helmet>
                    sadasd
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
  
                <Registration />
                    
            <Footer/> 
        </Fragment>
    );
}

export default LoginPage;
