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
import { Tab, Tabs, Button,TextField,InputLabel,FormRow } from '@material-ui/core'
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
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  pieChart
} from "variables/charts.js";


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
    textAlign:'center'
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

export default function CRMDetail() {
  const classes = useStyles();
  let state = {
    product: {},
    products: {},
    value: 0
  }
  return (
    <NoticeLayout>
      <br></br>
      
      <GridContainer  justify="center" spacing={4}>
        <GridItem md = {12} justify="center">
            <h3 style ={theme.control}>Buyer CRM</h3><br></br>
        </GridItem>
  
         <GridItem xs={12} sm={12} md={5} >
          <Card chart>
            <CardHeader >
            <h4 >Company Information</h4>
            </CardHeader>
            <CardBody >
            <GridContainer  spacing={1}>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Address</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth /><br></br>
                  </GridContainer>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Language</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth /><br></br>
                  </GridContainer>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Phone</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />  <br></br>
                  </GridContainer>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Email</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />  <br></br>
                  </GridContainer>
                </GridContainer>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5} >
          <Card chart>
            <CardHeader >
            <h4 >Remark</h4>
            </CardHeader>
            <CardBody >
            <GridContainer  spacing={1}>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Founded in</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth /><br></br>
                  </GridContainer>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Production Capacity</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth /><br></br>
                  </GridContainer>
                  <GridContainer container item xs={12} spacing={4}>
                  <InputLabel id="demo-simple-select-label">Shipping Capacity</InputLabel>
                        <TextField
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        fullWidth />  <br></br>
                  </GridContainer>

                </GridContainer>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
  


        <GridItem xs={12} sm={6} md={10} >
              <Steps current={1}  >
                  <Steps.Item title="Finished" description="Description" />
                  <Steps.Item  title="In Progress" description="Description" />
                  <Steps.Item title="Waiting" description="Description" />
              </Steps>  
        </GridItem>
      </GridContainer>
    </NoticeLayout>
  );
}
