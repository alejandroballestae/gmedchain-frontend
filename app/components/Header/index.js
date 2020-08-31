import React, { useState, Fragment, useEffect,useCallback } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { Grid, Menu, Button, TextField, InputAdornment, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import ScrollArea from 'react-scrollbar';

import { Link, NavLink } from 'react-router-dom'


import { changeLocale } from 'containers/LanguageProvider/actions';
import { addToCart, getCart } from 'containers/cartReducer/actions';
import './style.scss'

// images 
import cart1 from 'images/cart/img1.jpg'
import cart2 from 'images/cart/img2.jpg'


const Header = (props) => {



    useEffect(() => {
        props.loadValues();
      }, [props.cartLineState]);
    
    const menus = [
        {
            name: 'Solutions',
            link: '/Solutions',
            id: 1,
        },
        {
            name: 'Marketplace',
            link: '/products',
            id: 2,
        },
        {
            name: 'Become a Seller',
            link: '/BecomeSeller',
            id: 3,
        },
        {
            name: 'Supplier Network',
            link: '/SupplierNetwork',
            id: 4,
        },
        {
            name: 'About us',
            link: '/about',
            id: 5
        },

    ]
    const [openCart, setCart] = useState(null);
    const [openSearch, setSearch] = useState(null);
    const [expanded, setExpanded] = useState('0');
    const [menu, setMenu] = useState(false);
    const [products, setProducts] = useState([]);

    console.log('HEADERRRRRRRRRRRRRRR');
    console.log(localStorage.getItem("token"));
    console.log('---------------------');

 
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    const handleUpdate = (event) => {
        event.preventDefault();
        alert('paso');
    };
 
    const handleClickCart = event => {
        
        setCart(event.currentTarget);
    };

    const handleCloseCart = () => {
        setCart(null);
    };

    const handleClickSearch = event => {
        setSearch(event.currentTarget);
    };

    const handleCloseSearch = () => {
        setSearch(null);
    };

    const responsiveMenuHandler = () => {
        setMenu(!menu)
    }

    
    const logoStyle = {
        paddingLeft: "0px",
        paddingRight: "0px"
    };

    return (
   
        <header className={props.className ? `${props.className} headerArea` : 'headerArea'}>
            <Grid
                container
                alignItems="center"
                spacing={4}
                className="container">
                <Grid item lg={2} sm={6} xs={5} style = {logoStyle}>
                    <Link to="/" className="logoWrapper">
                        <img src={props.logo} alt="" />
                    </Link>
                </Grid>
                <Grid item className="d-none" lg={7}>
                    <ul className="mainmenu">
                        {menus.map(menu => (
                            <li key={menu.id}>
                                {menu.link ? <NavLink onClick={window.scrollTo(0, 0)} exact to={menu.link}>{menu.name}</NavLink> : <span>{menu.name}</span>}
                            </li>
                        ))}
                    </ul>
                </Grid>

                <Grid item lg={3} sm={5} xs={5}>
                    <ul className="headerRight d-none">
                        <li onClick={handleClickCart}>
                            <i className="fi flaticon-bag"></i>
                            {/*<span className="value">{cartLineState && cartLineState.length < 10 ? `0${cartLineState && cartLineState.length}` : cartLineState && cartLineState.length}</span>*/}
                        </li>
                        <li onClick={handleClickSearch}><i className="fi flaticon-magnifying-glass"></i></li>
                        <li>{ localStorage.getItem('token').length >10 ? <Link to={localStorage.getItem('type')=='Buyer'?"/dashboard":"/supplier-dashboard"}><Button className="btn">Dashboard</Button></Link>:<Link to="/login"><Button className="btn">Login</Button></Link>}</li>
                    </ul>
                    <Menu
                        anchorEl={openSearch}
                        keepMounted
                        open={Boolean(openSearch)}
                        onClose={handleCloseSearch}
                        elevation={1}
                        getContentAnchorEl={null}
                        className="searchWrap"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        classes={{
                            paper: 'searchPaper',
                            list: 'searchLists',
                        }}
                    >
                        <li>
                            <form>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">
                                            <Button><i className="fi flaticon-magnifying-glass"></i></Button>
                                        </InputAdornment>,
                                    }}
                                />
                            </form>
                        </li>
                    </Menu>
                    <Menu
                        anchorEl={openCart}
                        keepMounted
                        open={Boolean(openCart)}
                        onClose={handleCloseCart}
                        elevation={0}
                        getContentAnchorEl={null}
                        className="cartWrapper"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        classes={{
                            paper: 'cartPaper',
                            list: 'cartLists',
                        }}
                    >
                        <li className="cartList">
                            <ScrollArea
                                speed={1}
                                className="scrollbarArea"
                                contentClassName="scrollbarContent"
                                horizontal={false}
                            >
                                <ul className="cartItems" onChange = {(e)=>{handleUpdate(e)}}>
                                    {props.cartProducts && props.cartProducts.map((item, i) => (
                                        <li key={i}>
                                            <Button
                                                className="cartItem"
                                                component={Link}
                                                to="/product-details">
                                                <span className="cartImg">
                                                    <img src={cart1} alt="" />
                                                </span>
                                                <span className="cartContent">
                                                    <h4>{item.name}</h4>
                                                    <span>{`$${item.tiers[0].price}`}</span>
                                                </span>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            <br></br>
                            <Button className="btn btnFull" component={Link} to="/cart"> View cart </Button>
                        </li>
                    </Menu>
                </Grid>
                <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                    <ul onClick={responsiveMenuHandler} className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                        <li className="first"></li>
                        <li className="second"></li>
                        <li className="third"></li>
                    </ul>
                </Grid>
            </Grid>
            <Grid className={menu ? 'responsiveMenuWrap active' : 'responsiveMenuWrap'}>
                {menus.map((menu, i) => (
                    <Fragment key={i}>
                        {menu.submenu ? <ExpansionPanel
                            classes={{
                                root: 'responsiveColups',
                            }}
                            square
                            expanded={expanded === menu.id}
                            onChange={handleChange(menu.id)}>
                            <ExpansionPanelSummary className="responsiveColupdHead">{menu.name}</ExpansionPanelSummary>
                            <ExpansionPanelDetails className="responsiveColupdDetails">
                                <ul className="responsiveSubmenuItems">
                                    {menu.submenu.map(((sub, i) => (
                                        <li key={i}><NavLink exact activeClassName="active" to={sub.link}>{sub.name}</NavLink></li>
                                    )))}
                                </ul>
                            </ExpansionPanelDetails>
                        </ExpansionPanel> : <NavLink exact activeClassName="active" to={menu.link}>{menu.name}</NavLink>}
                    </Fragment>
                ))}
            </Grid>
        </header>
    );
}

/*const mapStateToProps = createStructuredSelector({
    headerComponent: makeSelectHeader(),
    locale: makeSelectLocale(),
    items:makeSelectItems(),
    cartProducts:makeSelectCartProducts()
});*/
function mapStateToProps(state) {
    return { cartProducts: state.cart.cartProducts.products }
}
function mapDispatchToProps(dispatch) {
    return {
        changeLocale: locale => dispatch(changeLocale(locale)),
        loadValues: () => dispatch(getCart())
          
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(Header));
