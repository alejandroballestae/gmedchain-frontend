import React, {useEffect, useState} from "react";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import NoticeLayout from "components/NoticeLayout";
import Maps from "views/Maps/Maps.js";
import http from 'http.service';
import { Steps } from 'rsuite';
import { useHistory } from 'react-router-dom';
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

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
};
async function getOrders(){
  const response = await http.get('/order').then(data => {
      console.log(data);
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}
async function changeStatus(id, history){

  var payload = {
    "order_id": id,
    "order_stats": "ConfirmDelivery"
    };
  console.log(payload);
  const response = await http.put('/user/order',payload).then(data => {
      console.log(data);
      history.push("/dashboard");
      return data;
  }).catch(error => {
      console.error(error);
  })
  return response;
}

export default function Dashboard() {
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
      <GridContainer justify="center" spacing={4}>

      <GridItem xs={12} sm={6} md={10} ><br></br>
          <h3>Your Active Orders</h3>
          <Card>
          <CardBody>

            <Table
              tableHeaderColor="primary"
              tableHead={["Order Id", "Status", "Date", "Location", "Shipping Method"]}
              tableData={
                orders.map((order)=>{
                  return [<a href ="#" onClick={(e) =>{SetStatus(order.order_status);}}>{order._id}</a>, orderDisplay[order.order_status], order.order_date, order.shipping_address.country, order.shipping_method,orderStatus[order.order_status]==4?<button onClick={(e)=>{changeStatus(order._id, history)}}>Accept Order</button>:""]
                })
               }
            />
          </CardBody>
          </Card>
        </GridItem>
        
        <GridItem xs={12} sm={6} md={10} >
          <h3>Order State</h3><br></br>
          <Steps current={currentStatus}  >

              <Steps.Item title="Order Placed" />
              <Steps.Item  title="Order Confirmed" />
              <Steps.Item  title="Ready To Pick" />
              <Steps.Item  title="On Delivery" />
              <Steps.Item title="Arrived" />
    
          </Steps> 
          <br></br>
        </GridItem>

        <GridItem xs={12} sm={6} md={10}>
        <Card>
            <CardHeader color="Success">
              <p className={classes.cardCategory}>
               You can see the location of your product here
              </p>
              <Maps></Maps>
            </CardHeader>
            
            </Card>
        </GridItem>


      </GridContainer>
    </NoticeLayout>
  );
}
