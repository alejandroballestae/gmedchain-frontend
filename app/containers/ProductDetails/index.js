import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import PurchaseLicence from 'components/PurchaseLicence/Loadable'
import ItemDetails from 'components/ItemDetails/Loadable'
import CommentItem from 'components/CommentItem/Loadable'
import PostComment from 'components/PostComment/Loadable'


import Footer from 'components/Footer/Loadable'

import 'components/Followers/style.scss'
import './style.scss'

// images 
import logo from 'images/logo.png'
// images 
import image1 from 'images/products/img1.jpg'



class ProductDetails extends Component {
    state = {
        product: [],
        img:"",
        value: 0
    }
    
    constructor(props) {
        super(props);
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        })
    }
    componentDidMount() {
        
        var img = (this.props.location.state.product && this.props.location.state.product.img_names?this.props.location.state.product.img_names[0]:"img1");
        let img_src = "";
        try{
            img_src = require(`../../images/products/${img}.jpg`);
        }catch(e){
            img_src = require(`../../images/products/img2.jpg`);
        }

        this.setState({
            product: this.props.location.state.product,
            img:img_src
        })
    }
    render() {
        const menus = [
            {
                name: 'Marketplace',
                link: '/products'
            },
            {
                name: this.state.product.name,
            },
        ]

        return (
            <Fragment>
                <Helmet>
                    <title>{this.state.product.name}</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <Breadcumb
                    title={this.state.product.name}
                    menus={menus}
                />
                <Grid className="productDetailsArea ptb-104">
                    <Grid container spacing={4} className="container">
                        <Grid item md={8} xs={12}>
                            <Grid className="productDetailsWrap">
                                <Grid className="productDetailsImg">
                                    <img src={this.state.img} alt="" />
                                </Grid>
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    classes={{
                                        root: 'tabWrap',
                                        flexContainer: 'tabContainer',
                                        indicator: 'tabIndicator'
                                    }}
                                >
                                    <Tab label="Item Details" />


                                </Tabs>
                                {this.state.value === 0 && <ItemDetails product = {this.state.product} />}
                                {this.state.value === 1 && <Fragment>
                                    <CommentItem />
                                    <PostComment />
                                </Fragment>}
                            </Grid>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <aside className="productDetailsSidebar">
                                <PurchaseLicence tiers = {this.state.product.tiers} product_id = {this.state.product._id}  />
                                {/*<Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-supermarket"></i>
                                            Total Sale
                                        </span>
                                        <span className="value">350</span>
                                    </p>
                                </Grid>
                                <Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-chat"></i>
                                            Comments
                                        </span>
                                        <span className="value">27</span>
                                    </p>
                                </Grid>
                                <Grid className="widgetWrap widgetWrapContent">
                                    <p>
                                        <span className="name">
                                            <i className="fi flaticon-favorites"></i>
                                            Item Rating
                                        </span>
                                        <span className="ratingItem">
                                            <Rating
                                                className="ratingIcon"
                                                emptySymbol="fa fa-star-o"
                                                fullSymbol="fa fa-star"
                                                initialRating={5}
                                                readonly
                                            />
                                            <span className="review">(08)</span>
                                        </span>

                                    </p>
                                </Grid>
                                <ProductInfo />*/}
                                <Grid className="widgetWrap authorWrapper">
                                    <Grid className="followersItem">
                                        {/*<Grid className="followersImg">
                                            <img src={author} alt="" />
                                        </Grid>*/}
                                        <Grid className="followersContent">
                                            <h4>{this.state.product.supplier_name}</h4>
                   
                                        </Grid>
                                    </Grid>
                                    <ul>
                                        <li><Button className="btn" component={Link} to={{pathname:'/author',state:{"supplier_id":this.state.product.supplier_id}}} >View Profile</Button></li>
                                    </ul>
                                </Grid>
                            </aside>
                        </Grid>
                    </Grid>
                </Grid>
                {/*<RecommendedPortfolio/>*/}
                <Footer />
            </Fragment>
        )
    }
}

export default ProductDetails;
