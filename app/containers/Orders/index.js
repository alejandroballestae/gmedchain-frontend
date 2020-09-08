import React,{useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import DateRange from "@material-ui/icons/DateRange";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import { Tab, Tabs, Button } from '@material-ui/core'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardIcon from "components/Card/CardIcon.js";

import NoticeLayout from "components/NoticeLayout";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import Maps from "views/Maps/Maps.js";
import { bugs, website, server } from "variables/general.js";
import { Steps } from 'rsuite';
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  pieChart
} from "variables/charts.js";
import http from 'http.service';

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
    padding: 2* 2,
  },
};
const orderStatus = {
  "Ordered": 0,
  "Confirmed": 1,
  "ReadyForPickup": 2,
  "onShipping": 3,
  "Delivered": 4,
  "ConfirmDelivery": 5
}
const orderDisplay = {
"Ordered": "Ordered",
"Confirmed": "Confirmed",
"ReadyForPickup": "Ready for Pickup",
"onShipping": "On Shipping",
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

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [statusData, setStatusData] = useState(        {
    labels: ["Ordered", "Confirmed", "On Shipping"],
    series: [
      { meta: "A value is:", value: 10 },
      { meta: "B value is:", value: 30 },
      { meta: "C value is:", value: 60 }
    ]});
  const [paymentData, setPaymentData] = useState({
    labels: ["Unpaid","Payed", "Unconfirmed"],
    series: [
      { meta: "A value is:", value: 50 },
      { meta: "C value is:", value: 50 }
    ]});
  const [isBusy, setBusy] = useState(true);
  const [state, setState] = useState({ value: 0 });
  const [currentStatus, setCurrentStatus] = useState(0);
  
  const handleChange = (event, newValue) => {
    setState({
        value: newValue
    })
  }
  useEffect(()=>{
    async function ordersCall(){
        setBusy(true);
        const response = await getOrders();
        setOrders(response.data);
        setBusy(false) ;
        var OrdersAux = response.data;
        var total = OrdersAux.length;
        var orderded = (OrdersAux.filter((order)=>orderStatus[order.order_status]==0).length/total)*100;
        var confirmed = (OrdersAux.filter((order)=>orderStatus[order.order_status]==1).length/total)*100;
        var readyToPick = (OrdersAux.filter((order)=>orderStatus[order.order_status]==2).length/total)*100;
        var onShipping = (OrdersAux.filter((order)=>orderStatus[order.order_status]==3).length/total)*100;
        var delivered = (OrdersAux.filter((order)=>orderStatus[order.order_status]==4).length/total)*100;
        var arrived = (OrdersAux.filter((order)=>orderStatus[order.order_status]==5).length/total)*100;

        var payed = (OrdersAux.filter((order)=>order.payment_status=='Complete').length/total)*100;
        var unpayed = (OrdersAux.filter((order)=>order.payment_status=='Incomplete').length/total)*100;
               
        setStatusData(
          {labels: ["Ordered", "Confirmed", "On Shipping"],
            series: [
              { meta: "A value is:", value: orderded },
              { meta: "B value is:", value: confirmed },
              { meta: "C value is:", value: readyToPick },
              { meta: "B value is:", value: onShipping },
              { meta: "C value is:", value: delivered },
              { meta: "C value is:", value: arrived }
            ]}
        )
        setPaymentData(  {
          labels: ["Unpaid","Paid"],
          series: [
            
            { meta: "C value is:", value: unpayed },
            { meta: "A value is:", value: payed }
          ]})
    }
    ordersCall();
    },[]);
    function SetStatus(id){
      setCurrentStatus(orderStatus[id]);
    }
  return (
    <NoticeLayout>
      <br></br>
      <GridContainer justify="center" spacing={4}>
      <GridItem xs={12} sm={12} md={3}>
          <Card chart>
            <CardHeader color="danger">
            <ChartistGraph
                className="ct-chart"
                data={statusData}
                type="Pie"
                options={pieChart.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Orders Status</h4>
            </CardBody>
            <CardFooter chart>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={paymentData}
                type="Pie"
                options={pieChart.options}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Orders Payment</h4>
            </CardBody>
            <CardFooter chart>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
            <h3 className={classes.cardTitle}>{orders.length} Orders</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
              
              </div>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>{
              
                orders.reduce(
                  (prevValue, currentValue) => prevValue + currentValue.cart.products.length,
                  0
                )
              } Prod.</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
             
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        {/*<GridItem xs={12} sm={6} md={10} >
          <h3>Order State</h3><br></br>
          <Steps current={1}  >
              <Steps.Item title="Finished" description="Description" />
              <Steps.Item  title="In Progress" description="Description" />
              <Steps.Item  title="In Progress" description="Description" />
              <Steps.Item  title="In Progress" description="Description" />
              <Steps.Item title="Waiting" description="Description" />
          </Steps> 
          <br></br>
  </GridItem>*/}
        <GridItem xs={12} sm={6} md={10} >
          <h3>Your  Orders</h3><br></br>
          <Tabs
                value={state.value}
                onChange={handleChange}
                classes={{
                    root: 'tabWrap',
                    flexContainer: 'tabContainer',
                    indicator: 'tabIndicator'
                }}
            >
                <Tab label="All" />
                <Tab label="Ordered" />
                <Tab label="Accepted" />
                <Tab label="Ready to Pickup" />
                <Tab label="Delivered" />
            </Tabs>
          <Card>
          <CardBody>
          {state.value === 0 &&<Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method]
                })
               }
            />}
                      {state.value === 1 &&<Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.filter(order => orderStatus[order.order_status] == 0).map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method]
                })
               }
            />}
                      {state.value === 2 &&<Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.filter(order => orderStatus[order.order_status] == 1).map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method]
                })
               }
            />}
                      {state.value === 3 &&<Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.filter(order => orderStatus[order.order_status] == 2).map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method]
                })
               }
            />}
                                  {state.value === 4 &&<Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.filter(order => orderStatus[order.order_status] == 2).map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method]
                })
               }
            />}
          </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </NoticeLayout>
  );
}
