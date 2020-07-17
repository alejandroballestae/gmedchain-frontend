import React, { Fragment } from 'react';
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
import ShoppingCartTable from '../../components/ShoppingCartTable';


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Checkout',
    },
]
const ShoppingCart = () => {
    return (
        <Fragment>

                <Helmet>
                    sadasd
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title='asdadasdasd'
                    menus={menus}
                />
            <ShoppingCartTable             
                    title='asdadasdasd'
                    menus={menus} />
            <Footer/>
        </Fragment>
    );
}

export default ShoppingCart;
