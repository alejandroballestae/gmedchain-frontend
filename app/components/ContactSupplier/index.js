import React, { useState } from 'react';
import { Grid, Button, TextField, Checkbox} from '@material-ui/core'
import ShoppingCartItem from 'components/ShoppingCartItem/Loadable'
import ModalVideo from 'react-modal-video'
import './style.scss'
import { Link } from 'react-router-dom'
// images 
import about from 'images/about.jpg'

const aboutStyle = {
    textAlign:"right"

}
const title = {
    height: "0px"
}
const ContactSupplier = () => {
    const [open, setOpen] = useState(false)
    return (<>
            <Grid className="aboutArea">
                <Grid container className="container title">
                    <Grid item lg={12} md={12} xs={12} >
                        <Grid className="aboutContent">
                            <h2>Send a Message to <span>Supplier XXXX</span></h2>
                        </Grid>
                    </Grid>
                </Grid>
                     
            <ShoppingCartItem />
            <br></br>

            <Grid className="contactArea">
                <Grid className="container" justify="center"  spacing={4} container>
                    <Grid   md={8} xs={12}  item>
                        <form className="contactForm"   >
                            <Grid container spacing={4} >
                                <Grid item sm={12} xs={12}>
                                    <Checkbox name="gilad" /> 
Matching recommended providers if this provider does not contact me in the within 24 hours
                                </Grid>
                                <Grid item sm={12} xs={12}> 
                                    <Checkbox  name="gilad" />You agree to share the business card with the provider.
                                </Grid>
                                <Grid item sm={12} xs={12}>

                                    <TextField
                                        name="fname"
                                        multiline
                                        rows={10}
                                        label="Message here*"
                                        fullWidth
                                        
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                    <Grid   md={8} xs={12} style = {aboutStyle} item>
                    <Link to="/order-message"><Button className="btn " >Send Message</Button></Link>
                    </Grid>
                </Grid>

            </Grid>
            </Grid> 
            </>            
    )
}


export default ContactSupplier;
