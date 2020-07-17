import React from 'react';
import { injectIntl } from 'react-intl';
import { Grid } from '@material-ui/core'
import SectionTitle from 'components/SectionTitle/Loadable'
import CalltoActionButton from 'components/CalltoActionButton/Loadable'
import './style.scss'

// images 
import image1 from 'images/blogs/img1.jpg'
import image2 from 'images/blogs/img2.jpg'
import image3 from 'images/blogs/img3.jpg'
import avarar1 from 'images/blogs/avatar1.png'
import avarar2 from 'images/blogs/avatar2.png'
import avarar3 from 'images/blogs/avatar3.png'

const CalltoAction = (props) => {
    const blogs = {
        items: [
            {
                image: image1,
                title: 'Suscribe as Buyer',
                name: 'Jenefar Wanjia ',
                badge: 'trending',
                avatar: avarar1,
                id: 1
            },
            {
                image: image2,
                title: 'Suscribe as Seller',
                badge: 'featured',
                name: 'Shophy Mole ',
                avatar: avarar2,
                id: 2
            },
        ]
    }
    return (
        <Grid className="blogArea ptb-104">
            <Grid
                container
                spacing={4}
                className="container">
                <Grid item xs={12}>
                    <SectionTitle
                        title='Start Now!!'
                        subtitle=''
                    />
                </Grid>
                {blogs.items.map((item, i) => (
                    <Grid key={i} item md={6} sm={6} xs={12} justify = "center">
                        <CalltoActionButton
                            image={item.image}
                            id={item.id}
                            title={item.title}
                            author={item.name}
                            avatar={item.avatar}
                            badge={item.badge}
                        />
                    </Grid>
                ))}
            </Grid>
        </Grid >
    );
}

export default injectIntl(CalltoAction);
