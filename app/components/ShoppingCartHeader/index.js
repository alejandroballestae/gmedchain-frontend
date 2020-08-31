import React, { useState } from 'react';
import { Grid, TextField, MenuItem, Button  } from '@material-ui/core'
import { Link } from 'react-router-dom'
import bgImg from 'images/bg/hero.jpg'
import {Steps} from 'rsuite'

import './style.scss'
import 'rsuite/dist/styles/rsuite-default.css'

const stepsStyle = {
    BackgroundColor : 'white'
}
const ShoppingCartHeader = ({ title, menus, current }) => {
    const [cetagory, setCetagory] = useState('all')
    const [search, setSearch] = useState('')
    return (
        <Grid className="breadcumbArea">
            <Grid container className="container">
                <Grid item xs={12}>
                    <Grid className="breadcumbWrap">
                        <h2>{title}</h2>
                        <ul>
                            {menus.map((item, i) => (
                                <li key={i}>
                                    {
                                        item.link ?
                                            <Link to={item.link}>{item.name}</Link> :
                                            <span>{item.name}</span>
                                    }
                                </li>
                            ))}
                        </ul>
                    </Grid>
                    <br></br>
                    <Grid className="heroContentTwo"  >
                        <Grid md={12}>
                            <Steps current={current}  >
                                <Steps.Item title="Cart Info" description="Check your cart" />
                                <Steps.Item  title="Additional Info" description="Tell us where" />
                                <Steps.Item title="Proceed" description="Place Order" />
                            </Steps>    
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShoppingCartHeader;
