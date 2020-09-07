import React from 'react';
import { Grid } from '@material-ui/core'
import './style.scss'

// images 
import banner from 'images/profile.jpg'

const Profile = (props) => {

    return (props.supplier.address?
        <Grid className="profileWrap">

      
            <h4>This supplier has been validated</h4>
            <Grid className="itemDetails" xs = {12} container>
                <Grid xs = {4}>
                <ul>
                    <li>Address: {props.supplier.address.address}</li>
                    <li>City: {props.supplier.address.city}</li>
                    <li>State: {props.supplier.address.state}</li>
                    <li>Country: {props.supplier.address.country}</li>
                </ul>
                </Grid>
            </Grid>
        </Grid>:<></>
    );
}

export default Profile;
