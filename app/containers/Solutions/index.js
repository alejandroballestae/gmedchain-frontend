import React, { Fragment } from 'react';
import { Steps } from 'rsuite';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Featured from 'components/HomeMain/Featured/Loadable'
import AboutContent from 'components/AboutContent/Loadable'
import SupplierNetworkContent from 'components/SupplierNetworkContent/Loadable'
import Team from 'components/Team/Loadable'
import Funfact from 'components/HomeTwo/Funfact/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
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


            <HeroOut/>
            <LandingTab />
            <Footer />
        </Fragment>
    );
}

export default Solutions;
