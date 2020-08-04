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
import { Tab, Tabs, Button } from '@material-ui/core'
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
};

export default function CRM() {
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
            <h3 style ={theme.control}>CRM Overview</h3><br></br>
        </GridItem>
  
      <GridItem xs={12} sm={12} md={5} >
          <Card chart>
            <CardHeader color="info">
            <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Bar"
                options={completedTasksChart.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={5}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={pieChart.data}
                type="Pie"
                options={pieChart.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Completed Tasks</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
  


        <GridItem xs={12} sm={6} md={10} >

          <Tabs
                value={state.value}
                classes={{
                    root: 'tabWrap',
                    flexContainer: 'tabContainer',
                    indicator: 'tabIndicator'
                }}
            >
                <Tab label="All" />
                <Tab label="Closed" />
                <Tab label="Unpaid" />
                <Tab label="Approved" />
                <Tab label="Completed" />
                <Tab label="Rejected" />
                <Tab label="Pending" />
            </Tabs>
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
      </GridContainer>
    </NoticeLayout>
  );
}
