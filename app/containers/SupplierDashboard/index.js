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
  completedTasksChart
} from "variables/charts.js";
import { Progress, Segment } from 'semantic-ui-react'
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import 'semantic-ui-css/semantic.min.css';
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
    padding: 2* 2,
  },
  indicator:{
    height:"80%"
  }
};

export default function SupplierDashboard() {
  const classes = useStyles();
  return (
    <NoticeLayout>
      <br></br>
      <GridContainer justify="center" >
        <GridItem xs={12} sm={6} md={12} justify="center" alignItems="center" >
          <h3>Order State</h3><br></br>
          <GridContainer justify="center" >
         
              <GridItem xs={12} sm={6} md={5}  alignItems="center">
              <h4>Time Performance</h4><br></br>
              <Steps current={1}  >
                <Steps.Item title="" description="" />
                <Steps.Item  title="" description="" />
                <Steps.Item  title="" description="" />
                <Steps.Item  title="" description="" />
                <Steps.Item title="" description="" />
            </Steps> 
            <br></br>
              <h4>Sales Performance</h4>
              <Segment >
                <Progress percent={21}  progress>
                  Uploading Files
                </Progress>
                <Progress percent={100} inverted progress success>
                  success
                </Progress>
                <Progress percent={100} inverted progress warning>
                  warning
                </Progress>
                <Progress percent={100} inverted progress error>
                  error
                </Progress>
              </Segment>
              </GridItem>
              <GridItem xs={12} sm={6} md={3} >
                    <Card style = {theme.indicator}>
                      <CardHeader color="success" stats icon>
                        <CardIcon color="info">
                          <Accessibility />
                        </CardIcon>
                        <p className={classes.cardCategory}>Revenue</p>
                        <h3 className={classes.cardTitle}>$34,245</h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <DateRange />
                          Last 24 Hours
                        </div>
                      </CardFooter>
                    </Card>
              </GridItem>
              <GridItem xs={12} sm={6} md={3} >
                    <Card>
                      <CardHeader color="success" stats icon>
                        <CardIcon color="info">
                          <Accessibility />
                        </CardIcon>
                        <p className={classes.cardCategory}>Revenue</p>
                        <h3 className={classes.cardTitle}>$34,245</h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <DateRange />
                          Last 24 Hours
                        </div>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader color="success" stats icon>
                        <CardIcon color="info">
                          <Accessibility />
                        </CardIcon>
                        <p className={classes.cardCategory}>Revenue</p>
                        <h3 className={classes.cardTitle}>$34,245</h3>
                      </CardHeader>
                      <CardFooter stats>
                        <div className={classes.stats}>
                          <DateRange />
                          Last 24 Hours
                        </div>
                      </CardFooter>
                    </Card>
              </GridItem>

          </GridContainer>
          <br></br>
        </GridItem>

        <GridItem xs={12} sm={6} md={10} >
          <h3>Your Active Orders</h3>
          <Card>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Product", "Sku", "Status", "Location", "Order Id"]}
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
