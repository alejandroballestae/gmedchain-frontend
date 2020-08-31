import React, { Fragment, Component } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'


// components 
import 'containers/BlogPage/style.scss'
import './style.scss'


import http from 'http.service';
import { useHistory, Link } from 'react-router-dom';


const totalContainer ={
    padding: '0px'
    
}
const totalAmount = {
    float:'right'
}




/*async function addProduct(productList){

    props.products.map(function(obj) { 
        products.push({product:obj['_id'],quantity:obj['quantity']});
    }); 
    console.log("productossssss1---");
    console.log(products);*/

const TotalCheckout= (props) => {
    const history = useHistory();
    async function addProduct(products){
        let productList =[]
        products.map(function(obj) { 
            productList.push({product:obj['_id'],quantity:parseInt(obj['quantity'])});
        }); 
        console.log(productList);
        const response = await http.put('/cart',productList).then(data => {
            history.push('/checkout-two');
            return data;
        }).catch(error => {
            if (error.response) {
                // Request made and server responded
                console.log(error.response.data);
                if(error.response.data.error.includes("Nothing ad")){
                    history.push('/checkout-two');
                }
                console.log(error.response.status);
                console.log(error.response.headers);
              } else if (error.request) {
                // The request was made but no response was received
                console.log(error.request);
              } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
              };
        })
        return response;
      }
    return (<>
                <Grid className=" ptb-104" style ={totalContainer}>
                    <Grid container className="container">
                        <Grid item md={12} xs={12}>
                            <Grid className='blogGridWrap'>
                                <Grid className="blogGridContent">
                                    <Grid className="authorBox">
                                        <Grid className="authorContent" container>
                                            <Grid item md={12} xs={12}  ><h4 style ={totalAmount}>TOTAL USD  {props.total} </h4></Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            {props.resume ? (
                                <span></span>
                            ) : ( 
                                <Button className="btn" style = {totalAmount} onClick = {()=>{addProduct(props.products)}} >Proceed</Button>
                            )}
                            <span> </span>
                           <br></br>
                           <br></br>
                        </Grid>
                    </Grid>
                </Grid>

        </>
    );
}

export default TotalCheckout;