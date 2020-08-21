import React,{useState, useEffect} from 'react';
import SectionTitle from 'components/SectionTitle/Loadable'
import { Grid, Button, TextField, Select, MenuItem, FormHelperText, InputLabel,Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
import './style.scss'
import { useHistory, Link } from 'react-router-dom';
import http from 'http.service';
import { useForm, Controller } from "react-hook-form";

import logo from 'images/logo.png'



async function getCountries(){
    const response = await http.get('/countries').then(data => {
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
const labelStyle = {
    padding: "20px"
}
const Registration = (props) => {
    const history = useHistory();
    const [isBusy, setBusy] = useState(true);
    const [countries, setCountries] = useState([]);
    const [serverErrors, setServerErrors] = useState([]);

    useEffect(()=>{
        async function countriesCall(){
            setBusy(true);
            const response = await getCountries();
            setCountries(response.data.country_names);
            setBusy(false) ;
        }
        countriesCall();
    },[]);

    const { register, handleSubmit, watch, errors, setError, control } = useForm();

    const onSubmit = data => {
        http.post('/signup',data).then(res => {
            console.log(res.data);
            console.log(JSON.stringify(res.data));
            Object.keys(res.data).forEach(function(key) {
                setError(key, {
                    type: "manual",
                    message: res.data[key]
                });
            });
            if(res.data.user_id){
                data.user_id = res.data.user_id;
                history.push("/verification",data);
            }
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
                        title="Register Now!"
                    />
                </Grid>
            <Grid className="contactArea"  style ={centerText} justify = "center" alignItems="center">
                <Grid  alignItems="center"  justify = "center" spacing={4} container md={12} xs={12}>
                    <Grid   md={6} xs={12}  item justify = "center" alignItems="center" >
                        <form className="contactForm" onSubmit={handleSubmit(onSubmit)} >
                            <Grid container spacing={4} alignItems="center" item>

                            
                                <Grid item sm={6} xs={12}  alignItems="center" item>
                                <p style={error}>{errors.fname && errors.fname.message}</p>
                                    <TextField
                                        name="fname"
                                        label="First Name"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} alignItems="center" item>
                                <p style={error}>{errors.lname && errors.lname.message}</p>
                                    <TextField
                                        name="lname"
                                        label="Last Name"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.company_name && errors.company_name.message}</p>
                                    <TextField
                                        name="company_name"
                                        label="Company Name"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={6} xs={12} alignItems="center" item>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select>
                                            {isBusy ? (
                                                <></>
                                            ) : (
                                                countries.map((country) => (
                                                    <MenuItem value={country}>{country}</MenuItem>
                                                ))
                                            )}
                                        </Select>
                                    }
                                    name="country"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue=""
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.country && errors.country.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                                <Grid item xs={6} justify = "center" alignItems="center" item>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {2}
                                >
                                    <p style={error}>{errors.type && errors.type.message}</p>
                                    <Controller
                                    as={
                                        <RadioGroup row aria-label="position" name="type"  inputRef={register} defaultValue="top">
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
                                            value="Shipper"
                                            control={<Radio color="primary" />}
                                            label="Shipper"
                                            labelPlacement="start"
                                        />
                                    </RadioGroup>
                                    }
                                    name="type"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue=""
                                    />
                                    <FormHelperText>
                                    {errors.wordlevel && errors.wordlevel.message}
                                    </FormHelperText>
                                    </FormControl>
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}> {errors.phone && errors.phone.message}</p>
                                    <TextField
                                        name="phone"
                                        label="Phone Number"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}> {errors.address && errors.address.message}</p>
                                    <TextField
                                        name="address"
                                        label="Adrress"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.city && errors.city.message}</p>
                                    <TextField
                                        name="city"
                                        label="City"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.state && errors.state.message}</p>
                                    <TextField
                                        name="state"
                                        label="State"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={5} xs={12} alignItems="center" item>
                                <p style={error}>{errors.pin && errors.pin.message}</p>
                                    <TextField
                                        name="pin"
                                        label="Zip Code"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.email && errors.email.message}</p>
                                    <TextField
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        disabled={ props.resume }
                                        inputRef={register({
                                            required: "Enter your e-mail",
                                            pattern: {
                                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                              message: "Enter a valid e-mail address",
                                            },
                                           })}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.password && errors.password.message}</p>
                                    <TextField
                                        name="password"
                                        label="Password"
                                        fullWidth
                                        type="password"
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item sm={12} xs={12} alignItems="center" item>
                                <p style={error}>{errors.confirm_password && errors.confirm_password.message}</p>
                                    <TextField
                                        name="confirm_password"
                                        label="Confirm Password"
                                        fullWidth
                                        type="password"
                                        disabled={ props.resume }
                                        inputRef={register}
                                    />
                                </Grid>
                                
                            </Grid>
                            
                        </form>
                    </Grid>
                    <Grid   md={12} xs={12}  item>
                    <p style={error}> {serverErrors.main && serverErrors.main.message}</p><br></br>
                    <Button className="btn " name = "main"  onClick={handleSubmit((d) => onSubmit(d))} >Resgister!</Button>
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
