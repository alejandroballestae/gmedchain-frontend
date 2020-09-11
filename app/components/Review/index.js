import React, { Component, Fragment } from 'react';
import Rating from 'react-rating'
import { Grid } from '@material-ui/core'
import Pagination from 'components/Pagination'
import { Link } from 'react-router-dom'
import './style.scss'

// images 
import image1 from 'images/review/img1.png'



const reviews = [
    {
        name: 'ThemePro',
        time: '11 Hours Ago',
        image: image1,
        rating: 5,
        rating_type: 'For Design Qualities',
        details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. ',
    },
]

class Review extends Component {
    state = {
        pageOfItems: [],
        reviews:[]
    }
    constructor(props) {
        super(props);
        console.log(props);
        console.log("--------TTTTTTTTTTTTTTTTTTTTt----------------------");
        this.state = { pager: {} };
        this.state = { reviews: props.reviews };
        console.log("--------RRRRRR----------------------");
        console.log(this.state.reviews);
        
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    render() {
        return (
            <Fragment>
                <ul className="reviewItems">
                    {this.props.reviews.map((item, i) => (
                        <li key={i} className="reviewItem">
                            <Grid className="reviewContent">
                                <Grid className="reviewContentTop">
                                    <Grid className="ContentLeft">
                                        <h4><Link to='/author'>{item.name}</Link></h4>
                                        <span>{item.time}</span>
                                    </Grid>
                                    <Grid className="contentRight">
                                        <Rating
                                            className="ratingIcon"
                                            emptySymbol="fa fa-star-o"
                                            fullSymbol="fa fa-star"
                                            initialRating={item.rating}
                                            readonly
                                        />
                                        <span className="review">{item.rating_type}</span>
                                    </Grid>
                                </Grid>
                                <p>{item.review}</p>
                            </Grid>
                        </li>
                    ))}

                </ul>
                <Pagination
                    rowShow={10}
                    items={this.props.reviews}
                    onChangePage={this.onChangePage}
                />
            </Fragment>
        )
    }
}

export default Review;
