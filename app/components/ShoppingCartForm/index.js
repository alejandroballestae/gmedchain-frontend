import React, {useState} from 'react';
import { Grid, Button, TextField, Select, MenuItem, InputLabel } from '@material-ui/core'
import { Link } from 'react-router-dom'
import 'containers/BlogPage/style.scss'
import './style.scss'

const contact_info = [
    {
        name: '25 North Street,Dubai',
        icon: 'fi flaticon-internet',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        label: 'Office Address'
    },
    {
        name: 'info@edefytheme.com',
        icon: 'fi flaticon-mail',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        label: 'Office Mail'
    },
    {
        name: '+91 256-987-239',
        icon: 'fi flaticon-support',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        label: 'Office Phone'
    },
]


const ShoppingCartForm = (props) => {
    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    return (<>
            <Grid className="contactArea">
                <Grid className="container" justify="center"  spacing={4} container>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm"   >
                            <h3>Address</h3>
                            <Grid container spacing={4} >
                                <Grid item sm={12} xs={12}>
                                    <TextField
                                        name="fname"
                                        value={fname}
                                        label="Contact Name*"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        name="email"
                                        value={email}
                                        label="Address 1"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="Address 2"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={12}>
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
                                <Grid item xs={12}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="State"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="City"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="Zip Code"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="Country Code"
                                        fullWidth
                                        disabled={ props.resume }
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        name="subject"
                                        value={subject}
                                        label="Phone Number"
                                        fullWidth
                                        disabled={ props.resume }
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
                                <Grid item xs={6}>
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
                                <Grid item xs={6} >
                                    <p>Trade Terms</p>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm"   >
                            <h3>Payment Method</h3><br></br>
                            <Grid container alignItems="center" spacing={4} >
                                <Grid item xs={12}>
                                    <InputLabel id="demo-simple-select-label">Select Payment Method</InputLabel>
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
                                <Grid item xs={6}>
                                    <InputLabel id="demo-simple-select-label">Select Payment Method</InputLabel>
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
                                <Grid item xs={6} >
                                    <p>Trade Terms</p>
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
                                        <Link to="/order-message"><Button className="btn" >Place Order</Button></Link>
                                    ) : (
                                        <Link to="/checkout-three"><Button className="btn"  >Proceed</Button></Link>
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