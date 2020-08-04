import React from "react";
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
import { Tab, Tabs, Button, Select, MenuItem, TextField } from '@material-ui/core'
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
import Maps from "views/Maps/Maps.js";
import { bugs, website, server } from "variables/general.js";
import { Steps } from 'rsuite';
import SettingsItem from 'components/SettingsItem/Loadable'
import TierItem from 'components/TierItem/Loadable'
import MembershipPlans from 'components/MembershipPlans/Loadable'
import InputLabel from "@material-ui/core/InputLabel";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  pieChart
} from "variables/charts.js";

import avarar1 from 'images/blogs/avatar1.png'
import styles from "assets/css/material-dashboard-react.css";

const useStyles = makeStyles(styles);

const theme= {
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    float: "right",
  },
  combo:{
      marginLeft: "200px",
      marginRight: "200px",
      marginBottom:"0px"

  },
  productImg:{
    width:'100%',
    height:'150px'
  }
};

export default function Language() {
  const classes = useStyles();
  let state = {
    product: {},
    products: {},
    value: 0
  }
  return (
    <NoticeLayout>
      <br></br>
      <GridContainer justify="center" spacing={2}>
      <h3>New Product</h3>
      <Card style = {theme.combo}>
        <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <InputLabel id="demo-simple-select-label">Indicate your product</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />
                </GridItem>    
              <br></br>
          </CardBody>
      </Card>
      <Card style = {theme.combo}>
        <CardBody>
                <GridItem md = {12} >
                    <br></br>
                <InputLabel id="demo-simple-select-label">Upload the Pictures of your Product</InputLabel><br>
                </br>
                    <GridContainer md = {12} >
                      <GridItem md = {4} >
                      <img src = {avarar1} style ={theme.productImg}></img>
                      </GridItem>
                      <GridItem md = {4} >
                      <img src = {avarar1} style = {theme.productImg}></img>
                      </GridItem>
                      <GridItem md = {4} >
                        <img src = {avarar1} style = {theme.productImg}></img>
                      </GridItem>
                    </GridContainer>
                </GridItem>    
              <br></br>
          </CardBody>
      </Card>
      <Card style = {theme.combo}>
          <CardBody>
            <GridItem md = {12} >
                <br></br>
            <InputLabel id="demo-simple-select-label">Select The Category of your Product</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select Country"
                    fullWidth
                
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
            </GridItem>    
                <br></br>
            </CardBody>
        </Card>
      <Card style = {theme.combo}>
          <CardBody>
            <GridItem md = {12} >
                <br></br>
                

            <InputLabel id="demo-simple-select-label">Type Brand</InputLabel>
            <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />
            </GridItem>    
            <GridItem md = {12}  >
                <br></br>
            <InputLabel id="demo-simple-select-label">Type Model</InputLabel>
            <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />
            </GridItem> 
            <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <InputLabel id="demo-simple-select-label">Additional Information</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />
                </GridItem>    
              <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <InputLabel id="demo-simple-select-label">Certifications</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />
                </GridItem>    
              <br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <InputLabel id="demo-simple-select-label">Price Tiers</InputLabel>
                    <TierItem></TierItem>
                </GridItem>    
                <GridItem xs={12} sm={6} md={12} style={theme.control} >
                     <Button className = "btn" >Add More +</Button>
                 </GridItem>
              <br></br><br></br>
            </CardBody>
        </Card>
        <Card style = {theme.combo}>
           <CardBody>
                <GridItem md = {12} >
                    <br></br>
                    
                <h4>All Fields Completed? </h4>
                    
                </GridItem>    
                <GridItem xs={12} sm={6} md={12} style={theme.control} >
                     <Button className = "btn" >Publish Product</Button>
                 </GridItem>
              <br></br><br></br>
            </CardBody>
        </Card>      
      </GridContainer>
      <br></br>
    </NoticeLayout>
  );
}
