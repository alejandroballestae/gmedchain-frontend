import React, { useState, useEffect } from 'react';
import { Grid, Tab, Tabs, Button } from '@material-ui/core'
import Rating from 'react-rating'
import './style.scss'

// components 
import Profile from 'components/Profile/Loadable'
import Portfolio from 'components/Portfolio/Loadable'
import http from 'http.service';
import Followers from 'components/Followers/Loadable'
import Review from 'components/Review/Loadable'
// images 
import author from 'images/cert_icon.jpg'

async function getAuthorInfo(id){
    
    const response = await http.get('/supplier/'+id).then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
  }

const AuthorInfo = (props) => {
    const [value, setValue] = useState(0);
    const [authorData, setAuthorData] = useState([]);
    const [isBusy, setBusy] = useState(false);
    function handleChange(event, newValue) {
        setValue(newValue);
    }

    useEffect(()=>{
        async function dataCall(){
            setBusy(true);
            const response = await getAuthorInfo(props.supplier_id);
            console.log(response.data);
            setAuthorData(response.data[0]);
            setBusy(false) ;
        }
        dataCall();
      },[]);
    return (
        <Grid className="authorInfoArea">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item lg={4} md={4} xs={12}>
                    <Grid className="authorImage">
                        <img src={author} alt="" />
                        <ul className="authorSocialLink">
    
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={8} md={8} xs={12}>
                    <Grid className="authorInfoWrap">
                        <Grid className="authorInfo">
                            <h3>{authorData.company_name}</h3>

                        </Grid>

                        <ul className="infoActionWrap">
                            <li>
                                <h4>{authorData.products?authorData.products.length:0}</h4>
                                <p>Total Products</p>
                            </li>
                            <li>
                                <h4>{authorData.orders?authorData.orders.length:0}</h4>
                                <p>Total Sale</p>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </Grid>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        classes={{
                            root: 'tabWrap',
                            flexContainer: 'tabContainer',
                            indicator: 'tabIndicator'
                        }}
                    >
                        <Tab label="Profile"  />
                       

                    </Tabs>
                    {value === 0 && <Profile supplier ={authorData} />}
                    {value === 1 && <Portfolio />}

                </Grid>
            </Grid>
        </Grid >
    )
}


export default AuthorInfo;
