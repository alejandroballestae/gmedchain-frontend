import React,{useState} from 'react';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField} from '@material-ui/core'
import './style.scss'
import { useForm } from "react-hook-form";
import http from 'http.service';
import logo from 'images/logo.png';

import { useHistory, Link } from 'react-router-dom';

const centerText = {
    textAlign:"center"

}
const textColor = {
    color: "blue"
}
const error = {
    color: "red"
}

const Login = (props) => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [serverErrors, setServerErrors] = useState([]);

    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit =  data => {
        http.post('/login',data).then(res => {
            console.log(res);
            console.log(res.data);
            history.push("/dashboard");
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
        console.log("paso------------");
    }
      
    return (
        <Grid className="testmonialArea ptb-104" style ={centerText} >
            <Grid container spacing={4} className="container" justify="center">
                <Grid item xs={12} >
                  
                </Grid>
                 

                <Grid item xs={12}>
                    <SectionTitle
                        title="Start Now!"
                    />
                </Grid>
          
            <Grid className="contactArea"  style ={centerText} justify = "center" alignItems="center">
                <Grid  alignItems="center"  justify = "center" spacing={4} container md={12} xs={12}>
                    <Grid   md={6} xs={12}  item justify = "center" alignItems="center" >
                        <form className="contactForm" onSubmit={handleSubmit(onSubmit)} >
                            <Grid container spacing={4} alignItems="center" item>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <TextField
                                        name="password"
                                        label="Password"
                                        type="password"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p style={error}> {serverErrors.main && serverErrors.main.message}</p><br></br>
                    <Button className="btn " onClick={handleSubmit((d) => onSubmit(d))} >Login</Button>
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
