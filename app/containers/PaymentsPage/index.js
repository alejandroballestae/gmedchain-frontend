import React,{useState}  from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import { Tab, Tabs, Button, Grid, withTheme, Select,InputLabel, MenuItem, TextField } from '@material-ui/core'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import NoticeLayout from "components/NoticeLayout";
import PaymentItem from "components/PaymentItem";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from 'react-router-dom'
import EmailNotificationSettings from "components/EmailNotificationSettings";
import Maps from "views/Maps/Maps.js";
import { bugs, website, server } from "variables/general.js";
import { Steps } from 'rsuite';
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  pieChart
} from "variables/charts.js";


import styles from "assets/css/material-dashboard-react.css";



const theme= {
  root: {
    flexGrow: 1,
  },

  control: {
    float: "right",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
    marginTop:'20px',
    marginLeft:'50px',
    marginRight:'50px',
    textAlign:'center'

  },
  form:{
    margin:'60px',
  }
};

export default function PaymentsPage() {
  
  const [open, setOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <NoticeLayout>
      <br></br>       
      <GridContainer justify="center" alignItems= "center" spacing={1}>
          <h3>Payment Settings</h3>
          
        <GridItem xs={12} sm={6} md={10} >
          
          <Card>
          <CardBody>
              <GridItem xs={12} sm={6} md={12} >
                <PaymentItem></PaymentItem>
              </GridItem>
              <GridItem xs={12} sm={6} md={12} style={theme.control} >
                 <Button className = "btn"  onClick={handleOpen} >Add More +</Button>
                 <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={theme.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                        timeout: 500,
                        }}
                    >
                        <Fade in={open}>
                        <GridItem justify = "center" alignItems="center" style={theme.paper}>
                            <h2 id="transition-modal-title">Fill in your credit card information</h2>
                            
                            <p id="transition-modal-description">Let our community know you are trustable! We invite you to fill your company information in your profile section.</p>

                            <Grid md={12} xs={12} style = {theme.form} item>
                                  <form className="contactForm centered"   >
                                    <br></br>
                                      <Grid container alignItems="center" spacing={4} >
                                          <Grid item xs={12}>
                                              <InputLabel id="demo-simple-select-label">Select Creditcard</InputLabel>
                                              <Select
                                                  labelId="demo-simple-select-label"
                                                  id="demo-simple-select"
                                                  label="Select Country"
                                                  value={1}
                                                  fullWidth
                         
                                                  >
                                                  <MenuItem value={10}>Ten</MenuItem>
                                                  <MenuItem value={20}>Twenty</MenuItem>
                                                  <MenuItem value={30}>Thirty</MenuItem>
                                                  </Select>
                                          </Grid>
                                          <Grid item xs={12}>
                                              <TextField
                                                  name="fname"
                                                  label="Credit Owner Card Name*"
                                                  fullWidth
                                              />
                                            <TextField
                                                  name="fname"

                                                  label="Credit Card Number"
                                                  fullWidth
                                              />
                                              <TextField
                                                  name="fname"
                                                  label="Expiration Date"
                                                  fullWidth
                                              />
                                              <TextField
                                                  name="fname"
                                                  label="Secret Code"
                                                  fullWidth
                                              />
                                                  
                                          </Grid>

                                          <Grid item className="textCenter" xs={6}>
                                                  <Button className="btn btnNormal" onClick={handleClose} >Cancel</Button>
                                          </Grid>
                                          <Grid item className="textCenter" xs={6}>
                                                  <Link to="/checkout-three"><Button className="btn"  >Proceed</Button></Link>
                                          </Grid>
                                      </Grid>
                                      <br></br>
                                  </form>
                              </Grid>
                              
                        </GridItem>
                        
                        </Fade>
                    </Modal>
              </GridItem>
            <br></br>
          </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </NoticeLayout>
  );
}
