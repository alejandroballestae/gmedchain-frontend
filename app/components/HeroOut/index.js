import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bgImg from 'images/bg/hero.png'
import heroImg from 'images/hero-img.png'
import about from 'images/about.jpg'

const heros = {
    title: 'Instrumentation is the Foundation',
    titleColor: 'Digital Marketplace',
    text: 'Order Medical Products from Our Verified Suppliers',
    btn: 'Start Shopping',
    btn2: 'Start Selling',
    bg: bgImg,
    heroImg: heroImg
}

const HeroOut = (props) => {
    const [open, setOpen] = useState(false)

    return (<>
        <Grid
            className="heroArea" >
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container">
                <Grid item lg={7} md={7}>
                    <Grid className="heroContent">
                        <h2>{heros.title} <span>{heros.titleColor}</span></h2>
                        <p>{heros.text}</p>
                    </Grid>
                </Grid>
                <Grid item lg={4} md={4} xs={12}  >
                    <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>

        </Grid>


                </>
    );
}

export default injectIntl(HeroOut);