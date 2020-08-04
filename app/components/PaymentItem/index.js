import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Swiper from 'react-id-swiper';
import ModalVideo from 'react-modal-video'

// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import CategoryList from 'components/CategoryList/Loadable'
import RecentPost from 'components/RecentPost/Loadable'
import Quote from 'components/Quote/Loadable'
import Tags from 'components/Tags/Loadable'
import CommentItem from 'components/CommentItem/Loadable'
import PostComment from 'components/PostComment/Loadable'
import Footer from 'components/Footer/Loadable'

import 'containers/BlogPage/style.scss'
import './style.scss'

// images 
import logo from 'images/logo.png'
import image1 from 'images/blogs/img4.jpg'
import image2 from 'images/blogs/img5.jpg'
import image3 from 'images/blogs/img6.jpg'
import avarar1 from 'images/blogs/avatar1.png'
import avarar2 from 'images/blogs/avatar2.png'
import avarar3 from 'images/blogs/avatar3.png'
import author from 'images/author.jpg'
import Switch from '@material-ui/core/Switch';

const blogs = [
    {
        title: 'How to estublish a team with a great way?',
        date: 'Sep 25,2019',
        author_name: 'themekhr',
        author: avarar1,
        like: '34',
        details: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now.",
        image: image1,
        id: 1
    }
]

const notItem ={
    textAlign: 'right'
    
}
const totalPrice = {
    float: 'right'
}
const itemContainer ={
    padding: '0px'
    
}
const PaymentItem = () => {


    return (<>
            <Grid className=" ptb-104" style = {itemContainer}>
                <Grid container  >
                    <Grid item md={12} xs={12}>
                        <Grid className='blogGridWrap'>
                            <Grid className="blogGridContent">
                                <Grid className="authorBox">
                                    <Grid className="authorContent" container>
                                        <Grid item md={5} xs={2}>
                                            <h4>Visa</h4>
                                            <p>****************6432</p>
                                            <ul className="socialLink">
                                            </ul>
                                        </Grid>
                                        <Grid item md={5} xs={2} style={notItem} >
                                            <ul className="socialLink">
                                                <li><a href="#"><i className="ti-trash"></i></a></li>
                                                <li><a href="#"><i className="ti-settings"></i></a></li>
                                            </ul>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default PaymentItem;