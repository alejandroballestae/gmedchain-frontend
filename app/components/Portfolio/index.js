import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import SingleProduct from 'components/SingleProduct/Loadable'
import Pagination from 'components/Pagination'
import './style.scss'
import ReactPaginate from 'react-paginate';

// images 
import image1 from 'images/products/img1.jpg'
import image2 from 'images/products/img2.jpg'
import image3 from 'images/products/img3.jpg'
import image4 from 'images/products/img4.jpg'
import image5 from 'images/products/img5.jpg'
import image6 from 'images/products/img6.jpg'
import http from 'http.service';

async function getProducts(){
    const response = await http.get('/product').then(data => {
        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
  }

class Portfolio extends Component {

    state = {
        pageOfItems: [],
        products:[],
        offset: 0,
        perPage: 10,
        currentPage: 0,
    }

    receivedData() {
            http.get('/product').then(data => {
                console.log(data);
               // const slice = data.data.slice(this.state.offset, this.state.offset + this.state.perPage)
                this.products = data.data;
                //console.log(slice);
                this.setState({
                  //  pageCount: Math.ceil(data.length / this.state.perPage)
                });
            }).catch(error => {
                console.error(error);
            });
    
    }
    
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
  
    };
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }
    componentDidMount() {

        this.setState({products: []});
        this.receivedData();

    }
    render() {
        return (
            <Grid container spacing={4} >
                {this.state.pageOfItems.map((product, i) => (
                        <Grid key={i} item sm={4} xs={12}>
                            <SingleProduct
                                id={product.id}
                                badge={product.badge}
                                name={product.name}
                                rating={product.rating}
                                image={image1}
                                author={product.author}
                                review={product.category}
                                price={product.price}
                            />
                        </Grid>
                    ))
                }
                < Grid xs={12} item>

                <Pagination
                        items={this.products}
                        onChangePage={this.onChangePage}
                    />
                </Grid >
            </Grid >
        )
    }
}
export default Portfolio;
