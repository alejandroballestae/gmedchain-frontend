import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import about1 from 'images/about1.jpg'
import about2 from 'images/about2.jpg'
import about3 from 'images/about3.jpg'

const aboutStyle = {
    paddingLeft:"60px"

}

const AboutContent = () => {
    const [open, setOpen] = useState(false)
    return (<>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>About <span>Gmedchain Team</span></h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <ul>
                            <li>Various versions have evolved over the years.</li>
                            <li>Sometimes by accident, sometimes on purpose. </li>
                            <li>Injected humour and the like.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${about1}) no-repeat center center / cover` }} className="aboutImg">
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid className="aboutArea">


                <Grid container spacing={4} className="container" >
                    <ModalVideo
                        channel='youtube'
                        isOpen={open}
                        videoId='XOStXaZ25cw'
                        onClose={() => setOpen(false)}
                    />
                    <Grid item lg={6} md={6} xs={12}  >
                        <Grid style={{ background: `url(${about2}) no-repeat center center / cover` }} className="aboutImg">
                        </Grid>
                    </Grid>

                    <Grid item lg={6} md={7} xs={12} spacing={4} >
                        <Grid className="aboutContent" style ={aboutStyle}>
                            <h2>Values</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                            <ul>
                                <li>Various versions have evolved over the years.</li>
                                <li>Sometimes by accident, sometimes on purpose. </li>
                                <li>Injected humour and the like.</li>
                            </ul>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>Mision & <span>Vision</span></h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        <ul>
                            <li>Various versions have evolved over the years.</li>
                            <li>Sometimes by accident, sometimes on purpose. </li>
                            <li>Injected humour and the like.</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${about3}) no-repeat center center / cover` }} className="aboutImg">
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


export default AboutContent;
