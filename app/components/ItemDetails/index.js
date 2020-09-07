import React from 'react';
import { Grid } from '@material-ui/core';
import './style.scss'

// images 
import preview from 'images/preview.jpg'

const ItemDetails = (props) => {
    return (
        <Grid className="itemDetails" xs = {12} container>
            <Grid xs = {4}>
            <h3>Certifications: </h3>
            <ul>
                {props.product.certification.map((item, i) => (
                            <li>{item}</li>                          
                ))}
            </ul>
            </Grid>
            <Grid xs = {4}>
            <h3>Categories: </h3>
            <ul>
            {props.product.category_name.map((item, i) => (
                            <li>{item}</li>                           
            ))}
            </ul>
            </Grid>
            <Grid xs = {4} >
            <h3>Description: </h3>      
            <ul>
             <li>{props.product.description}</li>                           
            </ul>
            </Grid>
        </Grid>
    );
}

export default ItemDetails;
