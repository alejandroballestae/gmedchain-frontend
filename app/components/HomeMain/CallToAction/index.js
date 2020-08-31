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
        icon: '',
        color: 'white',
        id: 1
    },
]


const NewlyAddProducts = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
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
        <Grid className="newlyAddProductsArea ptb-104">
            <Grid container spacing={4} className="container">
                <Grid item xs={12}>
                </Grid>
                <Grid xs={12}   
                alignItems="center"
                justify="center"item>

                <Grid item xs={12}>
                    <Grid className="newsleter" justify="center">
                        <h2>Start using our marketplace!</h2>
                            <Button class ="btn">Register now</Button>
                    </Grid>
                </Grid>
                                 
                </Grid>
            </Grid>
        </Grid>
    );
}

export default NewlyAddProducts;
