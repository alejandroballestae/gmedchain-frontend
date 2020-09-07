import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import './style.scss'
import http from 'http.service';

async function addProduct(product, history){
   
    const response = await http.put('/cart',{"product":product}).then(data => {
        history.push("/products");
    }).catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);

    
            if(error.response.data.error == "Nothing added to user cart."){
                history.push("/products");
            }else{
                history.push("/login");
            }
          //  history.push("/login");
            setServerErrors({main:{message:error.response.data['error']}});
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
const PurchaseLicence = (props) => {
    const history = useHistory();
    const [value, setValue] = useState(1);
    console.log(props);

    return (
        <Grid className="widgetWrap purchaseLicenceWrap">
            <h3><i className="fi flaticon-bag"></i> Pricing Detail</h3>
            <Grid className="purchaseLicenceContent">
                <p>These are the tiers for this product: </p>
                <ul>

                    {props.tiers.map((item, i) => (
                        <li key={i}>
                            {
                                    <span>from {item.start} - to {item.end} units = US$ {item.price}</span>
                            }
                        </li>
                    ))}
                        
                </ul>
            </Grid>
            <div className="textCenter">
                <Button className="btn mb-25" onClick={(event) =>{addProduct(props.product_id,history)}}>Add to Cart</Button> <br />
            </div>
        </Grid>
    )
}

export default PurchaseLicence;
