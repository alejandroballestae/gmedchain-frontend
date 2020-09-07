import React, {useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
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
import { useHistory } from 'react-router-dom';
import http from 'http.service';

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
const orderStatus = {
  "Ordered": 0,
  "Confirmed": 1,
  "ReadyForPickup": 2,
  "Shipped": 3,
  "Delivered": 4,
  "ConfirmDelivery": 5
}
const orderDisplay = {
  "Ordered": "Ordered",
  "Confirmed": "Confirmed",
  "ReadyForPickup": "Ready for Pickup",
  "Shipped": "Shipped",
  "Delivered": "Delivered",
  "ConfirmDelivery": "Confirmed Delivery"
}
async function getOrders(){
  const response = await http.get('/order').then(data => {
      console.log(data);
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
async function acceptOrder(id, history){
  var payload = {
    "order_id": id,
    "order_stats": "Confirmed"
    };
  console.log(payload);
  const response = await http.put('/supplier/order',payload).then(data => {
      console.log(data);
      history.push("/dashboard-supplier");
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
async function pickOrder(id, history){
  var payload = {
    "order_id": id,
    "order_stats": "ReadyForPickup"
    };
  console.log(payload);
  const response = await http.put('/supplier/order',payload).then(data => {
      console.log(data);
      history.push("/dashboard-supplier");
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}

export default function SupplierDashboard() {
  const history = useHistory();
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [isBusy, setBusy] = useState(true);
  const [currentStatus, setCurrentStatus] = useState(0);
  
  useEffect(()=>{
    async function ordersCall(){
        setBusy(true);
        const response = await getOrders();
        setOrders(response.data);
        setBusy(false) ;

    }
    ordersCall();
    },[]);
    function SetStatus(id){
      setCurrentStatus(orderStatus[id]);
    }
  return (
    <NoticeLayout>
      <br></br>
      <GridContainer justify="center" >
        {/*
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
        </GridItem>*/}

        <GridItem xs={12} sm={6} md={10} >
          <h3>Your Active Orders</h3>
          <Card>
          <CardBody>
          <Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method,orderStatus[order.order_status]==0?<button onClick={(e)=>{acceptOrder(order._id, history)}}>Accept Order</button>:orderStatus[order.order_status]==1?<button onClick={(e)=>{pickOrder(order._id, history)}}>Call Shipper</button>:""]
                })
               }
            />
          </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </NoticeLayout>
  );
}
