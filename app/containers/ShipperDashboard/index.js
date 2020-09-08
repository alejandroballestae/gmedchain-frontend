import React, {useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";


import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import NoticeLayout from "components/NoticeLayout";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import 'semantic-ui-css/semantic.min.css';


import CardBody from "components/Card/CardBody.js";
import { useHistory } from 'react-router-dom';
import http from 'http.service';

const useStyles = makeStyles(styles);
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
async function getOrders(){
  const response = await http.get('/order').then(data => {
    console.log("ORDERSSSS-----------");
      console.log(data);
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
async function notifyShipping(id, history){
  var payload = {
    "order_id": id,
    "order_stats": "onShipping"
    };
  console.log(payload);
  const response = await http.put('/shipper/order',payload).then(data => {
      console.log(data);
      history.push("/shipper-dashboard");
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
async function notifyDelivery(id, history){
  var payload = {
    "order_id": id,
    "order_stats": "Delivered"
    };
  console.log(payload);
  const response = await http.put('/shipper/order',payload).then(data => {
      console.log(data);
      history.push("/shipper-dashboard");
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
export default function ShipperDashboard() {
  const history = useHistory();
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [isBusy, setBusy] = useState(true);

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
        <GridItem xs={12} sm={6} md={10} >
          <h3>Your Active Orders</h3>
          <Card>
          <CardBody>
          <Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method,orderStatus[order.order_status]==2?<button onClick={(e)=>{notifyShipping(order._id, history)}}>Notify Shipping</button>:orderStatus[order.order_status]==3?<button onClick={(e)=>{notifyDelivery(order._id, history)}}>End Delivery</button>:""]
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
