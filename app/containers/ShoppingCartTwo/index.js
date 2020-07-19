import React, { Fragment, Button } from 'react';
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
import ShoppingCartHeader from 'components/ShoppingCartHeader/Loadable'
import ShoppingCartForm from 'components/ShoppingCartForm/Loadable'
import Footer from 'components/Footer/Loadable'
import HeroOut from '../../components/HeroOut';
import TotalCheckout from '../../components/TotalCheckout';
import ShoppingCartItem from '../../components/ShoppingCartItem';


const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Checkout',
    },
]
const ShoppingCartTwo = () => {

    return (
        <Fragment>

                <Helmet>
                    sadasd
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <ShoppingCartHeader             
                    title='Fill Info'
                    menus={menus} />
                <ShoppingCartForm  resume = {false}/>
            <Footer/> 
        </Fragment>
    );
}

export default ShoppingCartTwo;
