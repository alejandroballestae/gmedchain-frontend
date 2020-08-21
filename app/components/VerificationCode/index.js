import React,{useState} from 'react';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
import './style.scss'
import { useHistory, Link, useLocation } from 'react-router-dom'
// images 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import http from 'http.service';
import logo from 'images/logo.png'
import { useForm, Controller } from "react-hook-form";

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
async function resendCode(data){
    const response = await http.post('/resend-code',data).then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
}


const centerText = {
    textAlign:"center"

}
const textColor = {
    color: "blue"
}

const error = {
    color: "red"
}
const VerificationCode = (props) => {
    const history = useHistory();
    const location = useLocation();
    //const [user_id, setUserId] = useState(location.state.user_id);
    const [user_id, setUserId] = useState('5f398d433ccd5234a463785b');
    const classes = useStyles();
    const [serverErrors, setServerErrors] = useState([]);

    console.log(location.state.user_id);
    console.log(user_id);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const { register, handleSubmit, watch, errors, setError, control } = useForm();
    const onSubmit = data => {
        console.log(data);
        http.post('/email-verify',data).then(res => {
            console.log(data);
            console.log(res.data);
            Object.keys(res.data).forEach(function(key) {
                setError(key, {
                    type: "manual",
                    message: res.data[key]
                });
            });
            data.user_id = res.data.user_id;
            history.push("/registration-message",data);
            
        }).catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                setServerErrors({main:{message:error.response.data['error']}});
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              };
        });
    }
    return (
        <Grid className="testmonialArea ptb-104" style ={centerText} >
            <Grid container spacing={4} className="container" justify="center">
                <Grid item xs={12} >
                    <img src={logo} alt="" />
                </Grid>
                 

                <Grid item xs={12}>
                    <SectionTitle
                        title="Enter the Verification Code"
                        subtitle={"We sent you a code to this email: "+ location.state.email}
                    />
                </Grid>

            <Grid className="contactArea"  style ={centerText} justify = "center" alignItems="center">
                <Grid  alignItems="center"  justify = "center" spacing={4} container md={12} xs={12}>
                    <Grid   md={6} xs={12}  item justify = "center" alignItems="center" >
                        <form className="contactForm"  onSubmit={handleSubmit(onSubmit)}>
                            <input type ="hidden" name="user_id" ref = {register} value = {user_id} ></input>
                            <input type ="hidden" name="type" ref = {register} value = "Seller" ></input>

                            <Grid container spacing={4} alignItems="center" item>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="otp"
                                        label="Type the Verification Code"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p style={error}> {serverErrors.main && serverErrors.main.message}</p><br></br>resendCode
                    <Button className="btn " name = "main"  onClick={handleSubmit((d) => onSubmit(d))} >Done</Button>
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
                    <p>havent received an imail? <Link onClick={handleSubmit((d) => resendCode(d))}  style = {textColor}>Re send code!</Link></p>
                    </Grid>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
    );
}

export default VerificationCode;
