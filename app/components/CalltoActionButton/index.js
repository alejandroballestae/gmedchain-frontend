import React from 'react';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const CalltoActionButton = ({ image, badge, id, title, author, avatar }) => {

    return (
        <Grid className="blogWrap">
            <Grid className="blogImg">
                <Link to={`/blog-details/${id}`}>
                    <img src={image} alt="" />
                </Link>
                <span className={
                    `badge ${
                    badge === 'trending' && 'trending' ||
                    badge === 'featured' && 'featured' ||
                    badge === 'new' && 'new'
                    }`

                }>{badge}</span>
            </Grid>
            <Grid className="blogContent">
                 <Button className="btn">{title}</Button>
            </Grid>
        </Grid>
    );
}

export default CalltoActionButton;
