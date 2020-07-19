import React,{useState} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField, Select, MenuItem, InputLabel,Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import Slider from "react-slick";
import './style.scss'
import { Link } from 'react-router-dom'
// images 
import test1 from 'images/test/img1.jpg'
import test2 from 'images/test/img2.jpg'
import test3 from 'images/test/img3.jpg'
import check from 'images/check.png'
import logo from 'images/logo.png'
const centerText = {
    textAlign:"center"

}
const textColor = {
    color: "blue"
}
const labelStyle = {
    padding: "20px"
}
const Registration = (props) => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    return (
        <Grid className="testmonialArea ptb-104" style ={centerText} >
            <Grid container spacing={4} className="container" justify="center">
                <Grid item xs={12} >
                    <img src={logo} alt="" />
                </Grid>
                 

                <Grid item xs={12}>
                    <SectionTitle
                        title="Register Now!"
                    />
                </Grid>
          
            <Grid className="contactArea"  style ={centerText} justify = "center" alignItems="center">
                <Grid  alignItems="center"  justify = "center" spacing={4} container md={12} xs={12}>
                    <Grid   md={6} xs={12}  item justify = "center" alignItems="center" >
                        <form className="contactForm"  >
                            <Grid container spacing={4} alignItems="center" item>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Select Country"
                                        value={1}
                                        fullWidth
                                        disabled={ props.resume }
                                        >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                </Grid>
                                <Grid item xs={12} justify = "center" alignItems="center" item>
                                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                                        <p style = {labelStyle}>I'm a </p> 
                                        <FormControlLabel
                                        value="Buyer"
                                        control={<Radio color="primary" />}
                                        label="Buyer"
                                        labelPlacement="start"
                                        />
                                        <FormControlLabel
                                        value="Seller"
                                        control={<Radio color="primary" />}
                                        label="Seller"
                                        labelPlacement="start"
                                        />
                                        <FormControlLabel
                                        value="Both"
                                        control={<Radio color="primary" />}
                                        label="Both"
                                        labelPlacement="start"
                                        />
                                    </RadioGroup>
                                </Grid>
                            
                                <Grid item sm={6} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="First Name"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} alignItems="center" item>
                                    <TextField
                                        name="lname"
                                        value={fname}
                                        label="Last Name"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Company Name"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={3} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Country code"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={3} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Area Code"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Phone Number"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Email"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Password"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Confirm Password"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Captcha"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <Link to="/verification"><Button className="btn " >Resgister!</Button></Link>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p>By clicking Sign Up, you agree to our Terms of Service and Privacy Policy</p>
                    <p>Already have an acount?<Link to="/login" style = {textColor}> Log in</Link></p>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default Registration;
