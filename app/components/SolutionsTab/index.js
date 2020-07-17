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
import about from 'images/about.jpg'

const aboutStyle = {
    paddingLeft:"60px"

}

const SolutionsTab = () => {
    const [open, setOpen] = useState(false)
    return (<>
 
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>International <span>Network</span></h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <ul>
                            <li>Various versions have evolved over the years.</li>
                            <li>Sometimes by accident, sometimes on purpose. </li>
                            <li>Injected humour and the like.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutImg">
                        <Button
                            onClick={() => setOpen(true)}>
                            <i className="fa fa-play"></i>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>

        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Verify <span>Suppliers</span></h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <ul>
                            <li>Various versions have evolved over the years.</li>
                            <li>Sometimes by accident, sometimes on purpose. </li>
                            <li>Injected humour and the like.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutImg">
                        <Button
                            onClick={() => setOpen(true)}>
                            <i className="fa fa-play"></i>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Pricing/<span> Supplier Options</span></h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <ul>
                            <li>Various versions have evolved over the years.</li>
                            <li>Sometimes by accident, sometimes on purpose. </li>
                            <li>Injected humour and the like.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${about}) no-repeat center center / cover` }} className="aboutImg">
                        <Button
                            onClick={() => setOpen(true)}>
                            <i className="fa fa-play"></i>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <ModalVideo
                channel='youtube'
                isOpen={open}
                videoId='XOStXaZ25cw'
                onClose={() => setOpen(false)}
            />
        </Grid>

                    </>
            
            
    )
}


export default SolutionsTab;
