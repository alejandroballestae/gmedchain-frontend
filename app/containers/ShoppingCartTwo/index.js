import React, { Fragment, Button } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import ShoppingCartHeader from 'components/ShoppingCartHeader/Loadable'
import ShoppingCartForm from 'components/ShoppingCartForm/Loadable'
import Footer from 'components/Footer/Loadable'



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
                    menus={menus} 
                    current={1}
                />
                <ShoppingCartForm  resume = {false} state={[]}/>
            <Footer/> 
        </Fragment>
    );
}

export default  (ShoppingCartTwo);
