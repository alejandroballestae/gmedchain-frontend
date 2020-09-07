import React, { Fragment, Component } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from '@material-ui/core'
// components 
import Header from 'components/Header/Loadable'
import Breadcumb from 'components/Breadcumb/Loadable'
import Footer from 'components/Footer/Loadable'
import Portfolio from 'components/Portfolio/Loadable'
import CategoryList from 'components/CategoryList/Loadable'
import http from 'http.service';
import {  Link } from 'react-router-dom';
import './style.scss'

// images 
import logo from 'images/logo.png'

const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Marketplace',
    },

]

async function getProducts(){
    const [serverErrors, setServerErrors] = useState([]);
  
    const [searchText, setSearchText] = useState(this.props.location.state || '');

    const response = await http.get('/product').then(data => {

        return data;
    }).catch(error => {
        console.error(error);
    })
    return response;
  }
  async function addProduct(product, history){

    const response = await http.put('/cart',product).then(data => {
        return data;
    }).catch(error => {
        if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            if(error.response.data == "Nothing added to user cart."){
                
            }else{
                history.push("/login");
            }
          //  history.push("/login");
            setServerErrors({main:{message:error.response.data['error']}});
          } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          };
    })
    return response;
  }
class CategoryPage extends Component {
 
    state = {
        pageOfItems: [],
        products:[],
        offset: 0,
        perPage: 10,
        currentPage: 0,
        cartLineState:[],
        categories:[],
        search:"",
    }
    addProductToCartHandler = (event,id) => {
        event.preventDefault();
        const serverProduct = this.state.products.find((product) => {
          return product._id === id;
        });
        
        if(serverProduct === undefined) {
          return;
        }
        let productAdd = {}
        const cartProduct = this.state.products.find((product) => {

          return product._id === id;
        });
        
        console.log(id);
        addProduct({product:id, quantity:2},this.props.history);
        this.setState({cartLineState:[...this.state.cartLineState, null]});
    
      }
    
    removeProductToCartHandler = (id) => {
        const cartProduct = this.state.cartLineState.find((product) => {
          return product.id === id;
        });
        if(cartProduct.quantity === 1) {
            this.setState({cartLineState:this.state.cartLineState.filter((item) => {
            return item.id !== id;
          })});
        } else {
            this.setState({cartLineState:this.state.cartLineState.map((product) => {
            if(product.id === id) {
              product.quantity -= 1;
            }
            return product;
          })});
        }
      }
    receivedData() {
        console.log('-----------------logprops');
        console.log(this.props);
        let filter ={};

        if(this.props.location.state == undefined){
            http.get('/product').then(data => {
                this.setState({ products: data.data });
            }).catch(error => {
                console.error(error);
            });
 
            }else{
                if(this.props.location.state.searchText){
                    let url = "/product"
                    let searchData = {"product":this.props.location.state.searchText};
                    http.get(url,searchData).then(data => {
                        console.log("---------------------DATAaaaaaaaaaaaaaaaaaaaaaaaaaaa");
                        console.log(data);
                        this.setState({ products: data.data });
                    }).catch(error => {
                        console.error(error);
                    });
                }else{
                if(this.props.location.state.categorySearch){
                    let url = "/category/"+this.props.location.state.categorySearch;
                    http.get(url).then(data => {
                        console.log(data);
                        this.setState({ products: data.data[0].products });
                    }).catch(error => {
                        console.error(error);
                    });
      
            }

        }
    }

        http.get('/category').then(data => {
            console.log(data);
            this.setState({ categories: data.data });
        }).catch(error => {
            console.error(error);
        });
    }
    onSearch = (e)=> {
        
    }
    onChangePage = (pageOfItems) => {
        this.setState({ pageOfItems: pageOfItems });
    }

    componentDidMount() {
        this.receivedData();
    }
    render() {
        return (
            <Fragment>
                <Helmet>
                    <title>GMedchain</title>
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                    cartLineState = {this.state.cartLineState}
                />
                <Breadcumb
                    title="Start Shopping now!"
                    menus={menus}
                    searchText={this.props.location.state && this.props.location.state.searchText}
                />
                <Grid className="productCategoryArea ptb-104">
                    <Grid
                        container
                        spacing={4}
                        className="container">
                        <Grid item md={3} xs={12}>
                            <aside className="productcategorySidebar">
                                <CategoryList categories = {this.state.categories}/>
                            </aside>
                        </Grid>
                        <Grid item md={9} xs={12}>
                            <Portfolio onChangePage = {this.onChangePage} products = {this.state.products} pageOfItems = {this.state.pageOfItems} addProductToCartHandler = {this.addProductToCartHandler} />
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </Fragment>
        )
    }
}

export default CategoryPage;
