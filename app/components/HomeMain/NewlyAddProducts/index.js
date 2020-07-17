import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import SectionTitle from 'components/SectionTitle/Loadable'

import iso from 'images/certified/iso.png'
import iso2 from 'images/certified/iso2.png'
import fda from 'images/certified/fda.png'
import tuv from 'images/certified/tuv.png'
import astm from 'images/certified/astm.png'
import aami from 'images/certified/aami.png'
import './style.scss'

const products = [
    {
        name: 'ISO',
        icon: iso,
        color: 'white',
        id: 1
    },
    {
        name: 'ISO',
        icon: iso2,
        color: 'white',
        id: 2
    },
    {
        name: 'FDA',
        icon: fda,
        color: 'white',
        id: 3
    },
    {
        name: 'TUV',
        icon: tuv,
        color: 'white',
        id: 4
    },
    {
        name: 'ASTM',
        icon: astm,
        color: 'white',
        id: 5
    },
    {
        name: 'aami',
        icon: aami,
        color: 'white',
        id: 6
    }
 
]


const NewlyAddProducts = () => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
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
                        title="Only Certified Suppliers"
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

export default NewlyAddProducts;
