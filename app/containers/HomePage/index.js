import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { injectIntl } from 'react-intl';
import { compose } from 'redux';
import messages from './messages';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import Hero from 'components/HomeMain/Hero/Loadable'
import Featured from 'components/HomeMain/Featured/Loadable'
import NewlyAddProducts from 'components/HomeMain/NewlyAddProducts/Loadable'
import CallToAction from 'components/HomeMain/CallToAction/Loadable'
import Products from 'components/HomeMain/Products/Loadable'
import Activity from 'components/Activity/Loadable'
import Partners from 'components/HomeMain/Partners/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
import Pricing from 'components/Pricing/Loadable'
import Blog from 'components/Blog/Loadable'
import Footer from 'components/Footer/Loadable'

const HomePage = () => {
    const addProductToCartHandler = (id) => {
       
        const serverProduct = this.state.products.find((product) => {
          return product._id === id;
        });
        
        if(serverProduct === undefined) {
          return;
        }
    
        const cartProduct = this.state.cartLineState.find((product) => {
          return product._id === id;
        });

        if(cartProduct === undefined) {
          this.setState({cartLineState:[...this.state.cartLineState, serverProduct]});
        } 
      }
    
    return (
        
        <Fragment>
            <Helmet>
                <title>Home main</title>
            </Helmet>
            <Header
                logo={logo}
            />
            <Hero />
            <Products addProductToCartHandler = {addProductToCartHandler} />
            <Featured />
            <NewlyAddProducts />
            <Activity />
            <Partners />
            <CallToAction />
            <Footer />
        </Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    null,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(HomePage));
