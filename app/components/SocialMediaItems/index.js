import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const featureds = [
    {
        title: 'Facebook',
        link:'/user-info',
        text: '',
        color: 'linear-gradient(to bottom, #ffad6f, #ff7d90)',
        icon: 'flaticon-law',
        id: 1
    },
    {
        title: 'Linked-In',
        link:'/membership',
        text: '',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-first',
        id: 2
    },
    {
        title: 'Google',
        link:'/language',
        text: '',
        color: 'linear-gradient(to bottom, #c968ff, #6168f3)',
        icon: 'flaticon-ui',
        id: 3
    },
    {
        title: 'Twitter',
        link:'/notifications',
        text: '',
        color: 'linear-gradient(to bottom, #00ded8, #00a7d5)',
        icon: 'flaticon-checklist',
        id: 4
    },
 
]

const SettingsItem = () => {
    return (
        <Grid>
            
            <Grid container  >
                
                {featureds.map((item, i) => (
                    <Grid key={i} item md={4} sm={6} xs={12}>
                        <Link to={item.link}>
                            <Grid className="featuredItem">
                                <i style={{ background: item.color }} className={`fi ${item.icon}`}></i>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                                <p>(Disconnected)</p>
                            </Grid>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}

export default injectIntl(SettingsItem)
