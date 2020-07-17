import React, { Component, Fragment } from 'react';
import { Grid, Tab, Tabs } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
import Pagination from 'components/Pagination'
import SectionTitle from 'components/SectionTitle/Loadable'
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
    }
]

class RecommendedPortfolio extends Component {
    state = {
        pageOfItems: [],
    }

    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <Grid className="productArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Suggested Products"
                      
                    />
                </Grid>

                {<Fragment>
                    {products.map((product, i) => (
                        <Grid key={i} item lg={4} sm={6} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={product.image}
                                author={product.author}
                                review={product.review}
                                price={product.price}
                            />
                        </Grid>
                    ))}
                </Fragment>}


            </Grid>
        </Grid>
        )
    }
}
export default RecommendedPortfolio;
