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
const ShoppingCartTable = ({ title, menus }) => {
    const [cetagory, setCetagory] = useState('all')
    const [search, setSearch] = useState('')
    return (
        <Grid className="breadcumbArea">
            <Grid container spacing={4} className="container">
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
                    <Grid className="heroContentTwo">
                    <form className="heroForm">
                    <Steps current={1}  >
                            <Steps.Item Style = {stepsStyle} title="Finished" description="Description" />
                            <Steps.Item Style = {stepsStyle} title="In Progress" description="Description" />
                            <Steps.Item title="Waiting" description="Description" />
                            <Steps.Item title="Waiting" description="Description" />
                        </Steps>    
                        </form>
                        </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ShoppingCartTable;
