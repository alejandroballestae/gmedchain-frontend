import React,{useState} from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
import Slider from "react-slick";
import './style.scss'
import { Link } from 'react-router-dom'
// images 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import test1 from 'images/test/img1.jpg'
import test2 from 'images/test/img2.jpg'
import test3 from 'images/test/img3.jpg'
import check from 'images/check.png'
import logo from 'images/logo.png'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
const centerText = {
    textAlign:"center"

}
const textColor = {
    color: "blue"
}
const VerificationCode = (props) => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <Grid className="testmonialArea ptb-104" style ={centerText} >
            <Grid container spacing={4} className="container" justify="center">
                <Grid item xs={12} >
                    <img src={logo} alt="" />
                </Grid>
                 

                <Grid item xs={12}>
                    <SectionTitle
                        title="Enter the Verification Code"
                        subtitle="we send a verification code to ale****@gmail.com"
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
                                        label="Type the Verification Code"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <Button className="btn " onClick={handleOpen} >Done</Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <Grid className={classes.paper}>
                            <h2 id="transition-modal-title">You are almost ready</h2>
                            
                            <p id="transition-modal-description">Let our community know you are trustable! We invite you to fill your company information in your profile section.</p>
                            <br></br><p><Button className="btn " component={Link} to = "/profile">Take me there</Button></p>
                        </Grid>
                        </Fade>
                    </Modal>

                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p>havent received an imail? <Link to="/registration" style = {textColor}>Re send code!</Link></p>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default VerificationCode;
