import React, { Fragment } from 'react';

import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Footer from 'components/Footer/Loadable'
import HeroOut from '../../components/HeroOut';
import LandingTab from '../../components/LandingTab';


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Solutions',
    },
]
const Solutions = () => {
    return (
        <Fragment>

            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <HeroOut
                viewer="solutions"
            />
            <LandingTab />
            <Footer />
        </Fragment>
    );
}

export default Solutions;
