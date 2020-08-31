import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import bgImg from 'images/bg/hero.png'
import heroImg from 'images/hero-img.png'
import about from 'images/solutions/s1.png'

var heros = {
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
    const viewer =  props.viewer;
    switch(viewer) {
        case "solutions":
            heros.text="We help you save money, time and efforts by reducing costs and time, and increasing efficiency at each stage";
            break;
        case "supplierNetwork":
            heros.text="Discover a network of verified suppliers from around the globe";
            break;
        default:
            heros.text="Wes help you save money, time and efforts by reducing costs and time, and increasing efficiency at each stage";
    }

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
                    <Grid className="">
                    <img src = {about}></img>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>


                </>
    );
}

export default injectIntl(HeroOut);