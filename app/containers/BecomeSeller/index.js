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
import HeroSlider from 'components/HeroSlider/Loadable'
import Activity from 'components/Activity/Loadable'
import CallToAction from 'components/HomeMain/CallToAction/Loadable'
import Partners from 'components/HomeMain/Partners/Loadable'
import Testmonial from 'components/Testmonial/Loadable'
import Pricing from 'components/Pricing/Loadable'
import Footer from 'components/Footer/Loadable'
const BecomeSeller = () => {
    return (
        <Fragment>
            <Helmet>
                <title>Home main</title>
            </Helmet>
            <Header
                logo={logo}
            />

            <HeroSlider />
            <Activity />
            <Testmonial/>
            <Pricing/>
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

export default compose(withConnect)(injectIntl(BecomeSeller));
