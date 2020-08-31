import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { compose } from 'redux';
import Toolbar from '@material-ui/core/Toolbar';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { Grid, Menu, Button, TextField, InputAdornment, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import ScrollArea from 'react-scrollbar';
import './style.scss'
import {  getCart } from 'containers/cartReducer/actions';
import cart1 from 'images/cart/img1.jpg'

const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 15px rgba(0,0,0,0.04), 0 1px 6px rgba(0,0,0,0.04)',background: 'white',
  },
  dark: {
    background: 'white',
  },
  light: {
    background: 'white',

    '& .logo-text': {
      color: 'black',
    },
    '& .org-address': {
      color: '#62737F',
   
    },
  },
  logoWrapper: {
    display: 'flex',
  },
  logoImage: {
    marginRight: '.5rem',
    paddingRight: '.5rem',
    borderRight: '0px solid #C3CDD3',
  },
  logoText: {
    display: 'none',
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  orgAddress: {
    marginLeft: theme.spacing(2),
 
    
  },
  searchBar: {
    padding: '1.5px 1px !important',  
    height:'35px'  
  },


  icons: {
    marginLeft: theme.spacing(2),
 
    color: 'black',
  },
}));

import logo from 'images/logo.png'

const PrimaryNavigation = (props) => {
  const classes = useStyles();
 // const { settings, loadingSettings } = useContext(ServerSettingsContext);
  const theme = 1;
  const [openCart, setCart] = useState(null);
  const [openNotifications, setNotifications] = useState(null);
  const [openMessages, setMessages] = useState(null);
  const [menu, setMenu] = useState(false);
  const history = useHistory();
  
  useEffect(() => {
    props.loadValues();
  }, [props.cartLineState]);

  const handleCloseMessages = () => {
    setMessages(null);
  };
  const handleClickMessages = event => {
    localStorage.setItem('token',null);
    history.push('/login');
  };
  const handleCloseNotifications = () => {
    setNotifications(null);
  };
  const handleClickNotifications = event => {
    setNotifications(event.currentTarget);
  };

  const handleCloseCart = () => {
    setCart(null);
  };
  const handleClickCart = event => {
    setCart(event.currentTarget);
  };
  console.log('interally-------------------');
  console.log(localStorage.getItem('Token'));
  return (

      <AppBar className={`${classes.appBar}`}  position="fixed" elevation={0}>
        <Toolbar>
          <Grid md = {12} container alignContent = "center">
            <Grid className={`logo-wrapper ${classes.logoWrapper}`} md = {3}>
              <Link to="/">
                <img className={`logo-image ${classes.logoImage}`} src={logo} alt="Radish Logo" />
                </Link>
            </Grid>
            <Grid md = {5} >
                <form>
                    <TextField  
                        fullWidth
                        variant="outlined"
                        InputProps={{
                            className: classes.searchBar,
                            endAdornment: <InputAdornment position="end"  >
                                <Button><i className="fi flaticon-magnifying-glass"></i></Button>
                            </InputAdornment>,
                        }}
                    />
                </form>
            </Grid>
            <Grid item lg={3} sm={5} xs={5} alignContent = "center">
                    <ul className="headerRight d-none">
                        <li onClick={handleClickCart}  >
                            <i className="fi flaticon-bag black" ></i>
                            {/*<span className="value">{/*carts.length < 10 ? `0${carts.length}` : carts.length}</span>*/}
                        </li>
                        <li ><Link to ="/profile"><i className="fi flaticon-menu black" ></i></Link></li>
                        {/*<li onClick={handleClickNotifications} ><i className="fi flaticon-mail black"></i></li>*/}
                        <li onClick={handleClickMessages} class = {classes.icons}>logout</li>
                        {/*<li ><Link to ="/profile"><i className="fi flaticon-chat black"></i></Link></li>*/}
                    </ul>

                    <Menu
                        keepMounted
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
                                        endAdornment: <InputAdornment
                                        position="end">
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
                                <ul className="cartItems">
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
                            <Button className="btn btnFull" component={Link} to="/cart"> View cart </Button>
                        </li>
                    </Menu>

                    <Menu
                        anchorEl={openMessages}
                        keepMounted
                        open={Boolean(openMessages)}
                        onClose={handleCloseMessages}
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
                                <ul className="cartItems">
                                </ul>
                            </ScrollArea>
                            
                        </li>
                        <br></br>
                        <Button className="btn btnFull" component={Link} to="/cart"> View Notificacions </Button>
                    </Menu>
                    <Menu
                        anchorEl={openNotifications}
                        keepMounted
                        open={Boolean(openNotifications)}
                        onClose={handleCloseNotifications}
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
                                <ul className="cartItems">
 
                                </ul>
                            </ScrollArea>
                            
                        </li>
                        <br></br>
                        <Button className="btn btnFull" component={Link} to="/cart"> View Messages </Button>
                    </Menu>
                </Grid>

            <Grid item md={1} sm={1} xs={2} className="responsiveMenuTrigger">
                <ul className={menu ? 'responsiveMenuTriggerItem active' : 'responsiveMenuTriggerItem'}>
                    <li className="first"></li>
                    <li className="second"></li>
                    <li className="third"></li>
                </ul>
            </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
  );
}
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
export default compose(withConnect)(PrimaryNavigation);
