import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import SectionTitle from 'components/SectionTitle/Loadable'

import trello from 'images/partners/Trello.png'
import microsoft from 'images/partners/microsoft.png'
import corda from 'images/partners/corda.png'
import hubspot from 'images/partners/hubspot.png'
import './style.scss'   

const products = [
    {
        name: 'Trello',
        icon: trello,
        color: 'white',
        id: 1
    },
    {
        name: 'Microsoft',
        icon: microsoft,
        color: 'white',
        id: 2
    },
    {
        name: 'Corda',
        icon: corda,
        color: 'white',
        id: 3
    },
    {
        name: 'hubspot',
        icon: hubspot,
        color: 'white',
        id: 4
    }
 
]


const Partners = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        speed: 500,
        rows: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };
    return (
        <Grid className="newlyAddProductsArea ptb-104 bgGray">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title="Our Partners"
                        //subtitle="Build and Earn with your online store with lots of cool and exclusive features bundled with Edefy!"
                    />
                </Grid>
                <Grid xs={12} item>
                    <Slider
                        className="newProductSlider"
                        {...settings}>
                        {products.map((item, i) => (
                            <Grid
                                key={i}
                                className="newProductWrap">
                                <Button
                                    className="newProductItem"
                                    component={Link}
                                    to={`product-details/${item.id}`}

                                >
                                   
                                    <br></br>
                                    <i style={{ background: item.color }}><img src={item.icon} alt="" /></i>
                                </Button>
                           
                                 
                            </Grid>
                        ))}
                    </Slider>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Partners;
