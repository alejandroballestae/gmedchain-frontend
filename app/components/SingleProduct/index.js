import React from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import { Grid, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import Rating from 'react-rating'
import './style.scss'

const SingleProduct = ({ name, badge, description, image, author, review, price, id, addProductToCartHandler, product }) => {
    
    var img = (product.img_names?product.img_names[0]:"img1");
    let img_src = "";
    try{
        img_src = require(`../../images/products/${img}`);
    }catch(e){
        alert(e);
        img_src = require(`../../images/products/img2.jpg`);
    }
    console.log("--------------------------------------xxxxx");
    console.log(img);
    return (
        <Grid className="productWrap">
            <Grid className="productImg">
                <Link  to ={{pathname:`/product-details/${id}`,state:{product:product}}}>
                    <img src={img_src} alt="" />
                </Link>

            </Grid>
            <Grid className="productContent">
                <h3>
                    <Link to={{pathname:`/product-details/${id}`}}> {name.substring(0,15)}... </Link>
                </h3>
                <span className="author">By <Link to={{pathname:`/author`,state:{"supplier_id":product.supplier_id}}}>{product.supplier_name}</Link></span>
                <span className="rating">
                    <Rating
                        className="ratingIcon"
                        emptySymbol="fa fa-star-o"
                        fullSymbol="fa fa-star"
                        initialRating={description}
                        readonly
                    />
                    <span className="review">{description.substring(0,15)}...</span>
                </span>
                <div className="productAction">
                    <h4>{price}</h4>
                    <ul>
                        <li><Button onClick={(event) =>{addProductToCartHandler(event, id)}}><i className="flaticon-shopping-cart fi"></i></Button></li>
                    </ul>
                </div>
            </Grid>
        </Grid>
    );
}


export default injectIntl(SingleProduct)
