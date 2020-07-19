import React,{useState} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
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
const Login = (props) => {
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
                        title="Start Now!"
                    />
                </Grid>
          
            <Grid className="contactArea"  style ={centerText} justify = "center" alignItems="center">
                <Grid  alignItems="center"  justify = "center" spacing={4} container md={12} xs={12}>
                    <Grid   md={6} xs={12}  item justify = "center" alignItems="center" >
                        <form className="contactForm"  >
                            <Grid container spacing={4} alignItems="center" item>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Email"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={12} item312111111111>
                                    <TextField
                                        name="email"
                                        value={email}
                                        label="Password"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <Link to="/dashboard"><Button className="btn " >Login</Button></Link>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p>Dont have an account, <Link to="/registration" style = {textColor}>Sing up!</Link></p>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default Login;
