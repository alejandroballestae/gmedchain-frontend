import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button } from '@material-ui/core'
import Swiper from 'react-id-swiper';
import './style.scss'

// images 
import slider1 from 'images/slider/slider.png'
import slider2 from 'images/slider/slider2.png'
import slider3 from 'images/slider/slider3.png'


const HeroSlider = () => {
    const [cetagory, setCetagory] = useState('all')
    const [search, setSearch] = useState('')
    const params = {
        speed: 600,
        parallax: true,
        parallaxEl: {
            el: '.parallax-bg',
            value: '-23%'
        },
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    }

    const sliders = [slider1, slider2, slider3]
    return (
        <Grid className="heroSliderArea">
            <Grid className="heroContentTwo">
                <Grid container className="container" spacing={4}>
                    <Grid item xs={12} style ={{'textAlign':'center'}} >
                        <h2>Start Your <span>Digital Marketplace</span> Today!</h2>
                        <p>The Biggest Marketplace for Digital Product & the powerful</p>
                        <form className="heroForm">
                            <TextField
                                select
                                value={cetagory}
                                onChange={(e) => setCetagory(e.target.value)}
                                classes={{
                                    root: 'heroSelectBox',
                                }}
                            >
                                <MenuItem selected value='all'>All</MenuItem>
                                <MenuItem value='html'>HTML</MenuItem>
                                <MenuItem value='PHP'>PHP</MenuItem>
                                <MenuItem value='wordpress'>Wordpress</MenuItem>
                            </TextField>
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                type="text"
                                placeholder="Get Started Now"
                            />
                            <Button>Search</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
            <Swiper {...params}>
                {sliders.map((item, i) => (
                    <Grid key={i} style={{ background: `url(${item}) no-repeat center center / cover` }} className="heroSlider">
                    </Grid>
                ))}
            </Swiper>
        </Grid>
    )
}


export default HeroSlider;
