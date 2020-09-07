import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import './style.scss'

const featureds = [
    {
        title: 'Transparancy',
        text: 'Decentralized network and transparent pricing from our trusted suppliers to eliminate the middlemen and prevent price gouging and fraud.',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        icon: 'flaticon-law',
        id: 1
    },
    {
        title: 'Efficiency',
        text: 'Streamlined operation and process automation digitalize the entire Supply Chain Management system to reduce costs and save time.',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-first',
        id: 2
    },
    {
        title: 'Authenticity',
        text: 'Govern sourcing decisions and trace history for every product with a digital ‘passport’ that proves authenticity and origin. We connect the World.',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        icon: 'flaticon-ui',
        id: 3
    },
    {
        title: 'Accuracy',
        text: 'Predictive A.I. facilitates data-driven decisions to better forecast and plans demand, and respond intelligently to disruption.',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-checklist',
        id: 4
    },
    {
        title: 'Visibility',
        text: 'IoT Real-time tracking provides end to end visibility to deliver the right product, to the right place, at the right time.',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        icon: 'flaticon-magnifying-glass',
        id: 5
    },
    {
        title: 'Connectivity',
        text: 'We craft powerful templates to keep visitors engaged and maximize store sales extensively.',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        icon: 'flaticon-network',
        id: 6
    },
]

const Featured = () => {
    return (
        <Grid className="featuredArea ptb-104">
            <Grid container spacing={4} className="container">
                {featureds.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Grid className="featuredItem">
                            <i style={{ background: item.color }} className={`fi ${item.icon}`}></i>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default injectIntl(Featured)
