import React, { useState, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import SectionTitle from 'components/SectionTitle/Loadable'
import SolutionsTab from 'components/SolutionsTab/Loadable'
import { Grid, Tab, Tabs } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
import './style.scss'


// images 
import image1 from 'images/products/img1.jpg'
import image2 from 'images/products/img2.jpg'
import image3 from 'images/products/img3.jpg'
import image4 from 'images/products/img4.jpg'
import image5 from 'images/products/img5.jpg'
import image6 from 'images/products/img6.jpg'

const products = [
    {
        name: 'Canlye - Multipurpose React Template',
        badge: 'trending',
        rating: 4.2,
        image: image1,
        author: 'Wpoceans',
        price: '$49.00',
        review: '05',
        id: 1
    },
    {
        name: 'Sportyy - Gym & Sports Template',
        badge: 'featured',
        rating: 5,
        image: image2,
        author: 'Wpoceans',
        price: '$39.00',
        review: '105',
        id: 2
    },
    {
        name: 'Meditouch - Medical Landing Page',
        badge: 'new',
        rating: 4,
        image: image3,
        author: 'Wpoceans',
        price: '$29.00',
        review: '50',
        id: 3
    },
    {
        name: 'Sportyy - Gym & Sports Template',
        badge: 'featured',
        rating: 4.5,
        image: image4,
        author: 'Wpoceans',
        price: '$12.00',
        review: '25',
        id: 4
    },
    {
        name: 'Neon - Multipurpose Wordpress Template',
        badge: 'new',
        rating: 1.5,
        image: image5,
        author: 'Wpoceans',
        price: '$25.00',
        review: '87',
        id: 5
    },
    {
        name: 'Lavelo - Wedding Wordpress Template',
        badge: 'trending',
        rating: 5,
        image: image6,
        author: 'Wpoceans',
        price: '$150.00',
        review: '8774',
        id: 6
    },
]

const LandingTab = () => {
    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <Grid className="productArea pb-104">
            <Grid container spacing={4} className="container ">
                <Grid item xs={12} className = "block-example border-bottom border-dark">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            root: 'homeTwoProductTabs',
                            flexContainer: 'productTabContainer',
                            indicator: 'productTabIndicator'
                        }}
                    >
                        <Tab disableRipple  label="Buyers" />
                        <Tab  disableRipple label="Sellers" />
                    </Tabs>
                </Grid>
                {value === 0 && 
                <Fragment>
                    <SolutionsTab/>
                </Fragment>}
                {value === 1 && 
                <Fragment>
                   <SolutionsTab/>
               </Fragment>}
            </Grid>
        </Grid>
    );
}
export default injectIntl(LandingTab)
