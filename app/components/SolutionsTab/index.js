import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import ReactDOM from 'react-dom';


import 'rsuite/dist/styles/rsuite-default.css';
import './style.scss'


const styles = {
    width: '2000px',

    verticalAlign: 'top'
  };

// images
import main from 'images/solutions/buyers1.jpg' 
import buyers1 from 'images/solutions/buyers1.jpg' 
import buyers2 from 'images/solutions/buyers2.jpg' 
import buyers3 from 'images/solutions/buyers3.jpg' 
import buyers4 from 'images/solutions/buyers4.jpg' 
import sellers1 from 'images/solutions/sellers1.jpg' 
import sellers2 from 'images/solutions/sellers2.jpg'
import sellers3 from 'images/solutions/sellers3.jpg'
import sellers4 from 'images/solutions/sellers4.jpg'


const aboutStyle = {
    paddingLeft:"60px"

}

const SolutionsTab = (props) => {
    const [open, setOpen] = useState(false)
    return (<>
        {props.type == "buyers" ? (<>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Procurement <span>Proccess</span></h2>
                        <p>
                            We act as Concierge services by matching supply & demand from 
                            our global network of trusted suppliers without any intermediaries. </p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${buyers1}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Logistics<span> Platform</span></h2>
                        <p>GMedIoT provides real-time tracking and end to end visibility to deliver the right product, to the right place, at the right time.</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${buyers2}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Inventory<span> Solutions</span></h2>
                        <p>GMedAPI easily integrates with customers’ third-party ERP systems, and automates and simplifies sourcing, negotiation, contract management—and streamlines accounting, reporting, tracking, and control.</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${buyers3}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Planning<span> Efficiency</span></h2>
                        <p>GMedAI helps healthcare providers proactively project future programmatic and budgetary needs and make data-driven decisions to mitigate risks.</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${buyers4}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>) : (<>
            <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Business  <span>Identity</span></h2>
                        <p>missing</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${sellers1}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Sales<span> Automation</span></h2>
                        <p>Missing </p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${sellers2}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Smart Tracking: Inventory, Logistics, <span> Payment Management</span></h2>
                        <p>missing </p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${sellers3}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Analytic Reporting and <span> Demand Forecasting</span></h2>
                        <p>Demand models</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${sellers4}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </>)
        }
          </>          
            
            
    )
}


export default SolutionsTab;
