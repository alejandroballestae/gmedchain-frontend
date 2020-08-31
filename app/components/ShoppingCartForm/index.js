import React, {useState, useEffect} from 'react';
import { Grid, Button, TextField, Select, MenuItem, InputLabel, FormControlLabel, FormControl, FormHelperText} from '@material-ui/core'
import { useForm, Controller } from "react-hook-form";
import { useHistory, Link } from 'react-router-dom';
import 'containers/BlogPage/style.scss'
import './style.scss'
import http from 'http.service';


async function getCountries(){
    const response = await http.get('/countries').then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
}
async function getShippers(){
    const response = await http.get('/shippers').then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
}
const error = {
    color: "red"
}
const ShoppingCartForm = (props) => {

    

    const {contact_name, address, city, state, country, pin, phone, shipper_id, shipping_method, payment_method, trade_term} = props.state;
    
    const history = useHistory({forceRefresh:true});
    const [countries, setCountries] = useState([]);
    const [shippers, setShippers] = useState([]);
    const [isBusy, setBusy] = useState(true);
    const [serverErrors, setServerErrors] = useState([]);

    useEffect(()=>{
        async function countriesCall(){
            setBusy(true);
            const response = await getCountries();
            setCountries(response.data.country_names);
            setBusy(false) ;
        }
        async function shippersCall(){
            setBusy(true);
            const response = await getShippers();
            setShippers(response.data);
            setBusy(false) ;
        }
        shippersCall();
        countriesCall();
    },[]);
    const onSubmit = (data, key) => {
        if(key == 0){
            console.log("-------------parte1------------SIIIIIIII");
            console.log(data);
            history.push("/checkout-three",{data});
        }else{
            console.log("-------------xasdsxsaxasxasdsx------------SIIIIIIII");
            console.log(data);
            http.post('/order',data).then(res => {
                console.log(res.data);
                console.log(JSON.stringify(res.data));
                let gotError = false;
                Object.keys(res.data).forEach(function(key) {
                    setError(key, {
                        type: "manual",
                        message: res.data[key]
                    });
                    if(key != 'order_id')
                    gotError = true;
                });
                if(!gotError)
                history.push("/order-message");
                
                
                
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
    }

    const { register, handleSubmit, watch, errors, setError, control } = useForm();

    return (<>
            <Grid className="contactArea">
                <Grid className="container" justify="center"  spacing={4} container>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm" onSubmit={handleSubmit(onSubmit)} >
                            <h3>Address</h3>
                            <Grid container spacing={4} >
                                <Grid item sm={12} xs={12}>
                                    <TextField
                                        value={contact_name}
                                        inputProps={{ readOnly: props.resume }}
                                        name="contact_name"
                                        label="Contact Name*"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        value={address}
                                        inputProps={{ readOnly: props.resume }}
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={city}
                                        inputProps={{ readOnly: props.resume }}
                                        name="city"
                                        label="City"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        value={state}
                                        inputProps={{ readOnly: props.resume }}
                                        name="state"
                                        label="State"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Select Country</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select
                                        inputProps={{ readOnly: props.resume }}>
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
                                    defaultValue={country}
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.country && errors.country.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={pin}
                                        inputProps={{ readOnly: props.resume }}
                                        name="pin"
                                        label="Zip Code"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        value={phone}
                                        inputProps={{ readOnly: props.resume }}
                                        name="phone"
                                        label="Phone Number"
                                        fullWidth
                                        inputRef={register}
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm"   >
                            <h3>Shipping Method</h3><br></br>
                            <Grid container alignItems="center" spacing={4} >
                                <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Select Shipper</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select
                                        inputProps={{ readOnly: props.resume }}>

                                            {isBusy ? (
                                                <></>
                                            ) : (
                                                shippers.map((shipper) => (
                                                    <MenuItem value={shipper._id}>{shipper.company_name}</MenuItem>
                                                ))
                                            )}
                                        </Select>
                                    }
                                    name="shipper_id"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue={shipper_id}
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.shipper_id && errors.shipper_id.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                                <Grid item xs={6}>
                             
                                    <InputLabel id="demo-simple-select-label">Select Method</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select
                                        inputProps={{ readOnly: props.resume }}>
                                            <MenuItem value={"Air"}>Air</MenuItem>
                                            <MenuItem value={"Ground"}>Ground</MenuItem>
                                        </Select>
                                    }
                                    name="shipping_method"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue={shipping_method}
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.shipping_method && errors.shipping_method.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                                <Grid item xs={6} >
                             
                                <InputLabel id="demo-simple-select-label">Select Trade Term</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select
                                        inputProps={{ readOnly: props.resume }}>
                                            <MenuItem value={"IDK"}>xxxx</MenuItem>
                                            <MenuItem value={"IDK2"}>xxxx2</MenuItem>
                                        </Select>
                                    }
                                    name="trade_term"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue={trade_term}
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.trade_term && errors.trade_term.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm"   >
                            <h3>Payment Method</h3><br></br>
                            <Grid container alignItems="center" spacing={4} >
                                <Grid item xs={12}>
                                <InputLabel id="demo-simple-select-label">Select Payment Method</InputLabel><br></br>
                                <FormControl
                                    style={{ minWidth: 300 }}
                                    error={Boolean(errors.wordlevel)}
                                    key = {1}
                                >

                                    <Controller
                                    as={
                                        <Select
                                        inputProps={{ readOnly: props.resume }}>

                                        <MenuItem value={"credit"}>Credit Card</MenuItem>

                                        </Select>
                                    }
                                    name="payment_method"
                                    rules={{ required: "this is required" }}
                                    control={control}
                                    defaultValue={payment_method}
                                    />
                                    <FormHelperText>
                                    <p style={error}>{errors.payment_method && errors.payment_method.message}</p>
                                    </FormHelperText>
                                </FormControl>
                                </Grid>
                                <Grid item className="textCenter" xs={6}>
                                {props.resume ? (
                                        <Link to="/checkout-two"><Button className="btn btnNormal">Back</Button></Link>
                                    ) : (
                                        <Link to="/cart"><Button className="btn btnNormal" >Back</Button></Link>
                                    )}

                                </Grid>
                                <Grid item className="textCenter" xs={6}>
                                    {props.resume ? (
                                        <Button className="btn"  onClick={handleSubmit((d) => onSubmit(d,1))}>Place Order</Button>
                                    ) : (
                                        <Button className="btn"  onClick={handleSubmit((d) => onSubmit(d,0))}>Proceed</Button>
                                    )}
                                    
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid md={6} xs={12} item>
                        <Grid className="googleMap">

                        </Grid>
                    </Grid>
                </Grid>
            </Grid></>
    );
}

export default ShoppingCartForm;