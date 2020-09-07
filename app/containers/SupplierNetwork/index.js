import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Featured from 'components/HomeMain/Featured/Loadable'
import SupplierNetworkContent from 'components/SupplierNetworkContent/Loadable'
import Funfact from 'components/HomeTwo/Funfact/Loadable'
import Footer from 'components/Footer/Loadable'
import HeroOut from '../../components/HeroOut';


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Supplier Network',
    },
]
const SupplierNetwork = () => {
    return (
        <Fragment>

            <Header
                className="headerAreaStyleTwo"
                logo={logo}
            />
            <HeroOut 
                viewer = "supplierNetwork"
            />
            <Featured />
            <SupplierNetworkContent />
            <Funfact className="funfactAreaStyleTwo" />
            <Footer />
        </Fragment>
    );
}

export default SupplierNetwork;
