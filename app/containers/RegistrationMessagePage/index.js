import React, { Fragment, Button } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import RegistrationMessage from 'components/RegistrationMessage/Loadable'
import Footer from 'components/Footer/Loadable'



const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'registration',
    },
]
const RegistrationMessagePage = () => {

    return (
        <Fragment>

                <Helmet>
                    sadasd
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <RegistrationMessage />
                    
            <Footer/> 
        </Fragment>
    );
}

export default RegistrationMessagePage;
