import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Grid, Button} from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import Slider from "react-slick";
import './style.scss'
import { Link } from 'react-router-dom'
// images 
import test1 from 'images/test/img1.jpg'
import test2 from 'images/test/img2.jpg'
import test3 from 'images/test/img3.jpg'
import check from 'images/check.png'

const RegistrationMessage = () => {
    
    return (
        <Grid className="testmonialArea ptb-104" >
            <Grid container spacing={4} className="container" justify="center">
                <Grid item xs={1} >
                    <img src={check} alt="" />
                </Grid>
                 

                <Grid item xs={12}>
                    <SectionTitle
                        title="Your account was verified successfully"
                        subtitle="you can now start using GMedchain!"
                    />
            
                </Grid>
                <Grid item className="textCenter" xs={6}>
                        <Link to="/products"><Button className="btn btnNormal">Back To Market Place</Button></Link>
                </Grid>
                <Grid item className="textCenter" xs={6}>
                        <Link to="/login"><Button className="btn" >Login</Button></Link>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default RegistrationMessage;
