import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import { Grid, Button } from '@material-ui/core'

import './style.scss'

// images 
import bgImg from 'images/bg/hero2.jpg';

import { Link, NavLink } from 'react-router-dom'
const heros = {
    title: 'REIMAGINING HEALTHCARE',
    titleColor: '',
    text: 'Paving The Way For Innovation In Healthcare',
    btn: 'Start Shopping',
    btn2: 'Start Selling',
    bg: bgImg
}

const Hero = (props) => {
    const [open, setOpen] = useState(false)

    return (<>
        <Grid
            style={{ background: `url(${heros.bg}) no-repeat center center / cover` }}
            className="heroArea">
            <Grid
                container
                spacing={4}
                alignItems="center"
                className="container">
                <Grid item lg={7} md={7}>
                    <Grid className="heroContent">
                        <h2>{heros.title} <span>{heros.titleColor}</span></h2>
                        <p>{heros.text}</p>
                        <ul>
                            <li> <Link to="/registration" ><Button className="btn">{heros.btn}</Button></Link></li>
                            <li> <Link to="/registration" ><Button className="btn btnNormal">{heros.btn2}</Button></Link></li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>

                </>
    );
}

export default injectIntl(Hero);