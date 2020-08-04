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
import ChatPanel from "components/ChatPanel";
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
import author from 'images/author.jpg'

import styles from "assets/css/material-dashboard-react.css";
const useStyles = makeStyles(styles);


const theme= {
  root: {
    flexGrow: 1,
  },
  title:{
    textAlign:"center",
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
  chat:{
    paddingTop:'270px'
  },
  form:{
    margin:'60px',
  },
  imgclass:{
    height:'200px'
  }
};

export default function Inventory() {
  const classes = useStyles();
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
      <GridContainer  spacing={1} >
        <GridItem xs={12} sm={6} md={12} >
            <h3 style = {theme.title}>Inventory</h3>
        </GridItem>
        <GridItem xs={12} sm={6} md={12} >
          <Card>
            <CardBody>
              <Table
                  tableHeaderColor="primary"
                  tableHead={["RFP", "Supplier", "Date", "Status", "Actions"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738","x"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789","x"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142","x"],
                    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735","x"],
                    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542","x"],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615",""]
                  ]}
                />
              </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={4} >
          <Card>
          <CardBody>
                <GridItem xs={12} sm={6} md={12} >
                  <h3>Product Name</h3>
                </GridItem>
                <GridItem xs={12} sm={6} md={12} >
                <img src={author} style = {theme.imgclass} alt="" />
                </GridItem>   
                <GridItem xs={12} sm={6} md={12} >
                  <h3>Total Stock</h3>
                </GridItem>         
                <GridItem xs={12} sm={6} md={12} >
                  <p>100pc</p>
                </GridItem>  
                <GridItem xs={12} sm={6} md={12} >
                  <br></br>
                    <Button className = "btn"   > Add Stock</Button>
                </GridItem>                         
          </CardBody>
          </Card>
         </GridItem>
         <GridItem xs={12} sm={6} md={8} >
          
          <Card>
          <CardBody>
              <GridItem xs={12} sm={6} md={12} >
              <Table
                  tableHeaderColor="primary"
                  tableHead={["RFP", "Supplier", "Date", "Status", "Actions"]}
                  tableData={[
                    ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738","x"],
                    ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789","x"],
                    ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142","x"],
                    ["Philip Chaney", "Korea, South", "Overland Park", "$38,735","x"],
                    ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542","x"],
                    ["Mason Porter", "Chile", "Gloucester", "$78,615",""]
                  ]}
                />
              </GridItem>
              </CardBody>
              </Card>
         </GridItem>
      </GridContainer>
    </NoticeLayout>
  );
}
