import React, { Fragment, Button, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

// images 
import logo from 'images/logo.png'

// components 
import Header from 'components/Header/Loadable'
import ShoppingCartHeader from 'components/ShoppingCartHeader/Loadable'
import ShoppingCartForm from 'components/ShoppingCartForm/Loadable'
import Footer from 'components/Footer/Loadable'
import TotalCheckout from '../../components/TotalCheckout';
import ShoppingCartItem from '../../components/ShoppingCartItem';
import { connect } from 'react-redux';

const menus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Checkout',
    },
]
function calculateTotal(productArray){
    let total = 0;
    if(productArray){
        console.log(productArray);
        productArray.map((item,i)=>{
            if(item.tiers)
            total = total+ (item.quantity * item.tiers[0].price);
            console.log(item.quantity + " * "  + item.tiers[0].price);
        });
    }

    return total.toLocaleString();;
}
const ShoppingCartThree = (props) => {
    const [total,setTotal] = useState(0);
    console.log("-----FormProps");
    console.log(props);
    function handleChange(newValue, id) {
        console.log(newValue);
        console.log("Total--------------------------");
        props.cart.cartProducts.products.find(product => product._id == id).quantity = newValue;
        console.log(props.cart.cartProducts.products);
        console.log(id);
        setTotal(calculateTotal(props.cart.cartProducts.products));
      }
    useEffect(() => {
        console.log("shopping Cart -------------------------");
        setTotal(calculateTotal(props.cart.cartProducts.products));
        console.log(total); 
      });
    return (
        <Fragment>

                <Helmet>
                    Resuem
                </Helmet>
                <Header
                    className="headerAreaStyleTwo"
                    logo={logo}
                />
                <ShoppingCartHeader             
                    title='Resume'
                    menus={menus} 
                    current ={2}/>
                    <br></br>
                {props.cart.cartProducts.products && props.cart.cartProducts.products.map((item, i) => (
                    <ShoppingCartItem 
                        id={item._id}
                        name={item.name}
                        description={item.description}
                        quantity={item.quantity}
                        tiers={item.tiers}
                        onChange={handleChange}
                        resume = {true}
                    />
                    ))}
                 <TotalCheckout resume = {true} products = {props.cart.cartProducts.products} total = {total} />
                <ShoppingCartForm  resume = {true} state = {props.location.state.data}   />
            <Footer/>
        </Fragment>
    );
}
function mapStateToProps(state) {
    return state
  }
export default connect(mapStateToProps)(ShoppingCartThree);
