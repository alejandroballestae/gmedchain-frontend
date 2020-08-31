import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
import './style.scss'
import Pagination from 'components/Pagination'

// images 
import image1 from 'images/products/img1.jpg'

class Portfolio extends Component {
   
    constructor(props) {
        super(props);

      }
      
    render() {
        return (
            <Grid container spacing={4} >
                {this.props.pageOfItems && this.props.pageOfItems.map((product, i) => (
                        <Grid key={i} item sm={4} xs={12}>
                            <SingleProduct
                                id={product._id}
                                badge={product.badge}
                                name={product.name}
                                description={product.description}
                                image={image1}
                                author={product.author}
                                review={product.category}
                                price={`US$ ${product.tiers[0].price}`}
                                addProductToCartHandler={this.props.addProductToCartHandler}/>
                        </Grid>
                    ))
                }
                < Grid xs={12} item>
                    <Pagination
                            rowShow={8}
                            items={this.props.products}
                            onChangePage={this.props.onChangePage}
                        />
                </Grid >
            </Grid >
        )
    }
}
export default Portfolio;
