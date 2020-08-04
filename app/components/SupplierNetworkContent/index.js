import React, { useState } from 'react';
import { Grid, Button } from '@material-ui/core'
import ModalVideo from 'react-modal-video'
import './style.scss'

// images 
import supplierNetwork1 from 'images/SupplierNetwork/supplier_network1.jpg'
import supplierNetwork2 from 'images/SupplierNetwork/supplier_network2.jpg'
import supplierNetwork3 from 'images/SupplierNetwork/supplier_network3.jpg'

const aboutStyle = {
    paddingLeft:"60px"

}

const SupplierNetworkContent = () => {
    const [open, setOpen] = useState(false)
    return (<>
        <Grid className="aboutArea">
            <Grid container spacing={4} className="container">
                <Grid item lg={6} md={6} xs={12}>
                    <Grid className="aboutContent">
                        <h2>International <span>Network</span></h2>
                        <p>A strong community is critical to your success</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${supplierNetwork1}) no-repeat center center / cover` }} className="aboutImg">
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
                        <p>missing</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${supplierNetwork2}) no-repeat center center / cover` }} className="aboutImg">
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
                        <h2>Data<span> Integrity</span></h2>
                        <p>We provides integrations from partners to ensure supplier data credibility, provide actionable insights, and streamline the qualification & onboarding process.</p>
                    </Grid>
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                    <Grid style={{ background: `url(${supplierNetwork3}) no-repeat center center / cover` }} className="aboutImg">
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


export default SupplierNetworkContent;
