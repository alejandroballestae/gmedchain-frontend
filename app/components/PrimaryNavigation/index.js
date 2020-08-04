import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { Grid, Menu, Button, TextField, InputAdornment, ExpansionPanelSummary, ExpansionPanelDetails, ExpansionPanel } from '@material-ui/core'
import Chip from '@material-ui/core/Chip';
import ScrollArea from 'react-scrollbar';
import cart1 from 'images/cart/img1.jpg'
import cart2 from 'images/cart/img2.jpg'
import './style.scss'

const carts = [
  {
      image: cart1,
      name: 'Brown Leather Boots',
      value: '145.10',
      id: 1
  },
  {
      image: cart2,
      name: 'Headphones Pryma',
      value: '15.10',
      id: 2
  },
  {
      image: cart1,
      name: 'Brown Leather Boots',
      value: '145.10',
      id: 3
  },
  {
      image: cart2,
      name: 'Headphones Pryma',
      value: '15.10',
      id: 4
  },
  {
      image: cart1,
      name: 'Brown Leather Boots',
      value: '145.10',
      id: 5
  },
  {
      image: cart2,
      name: 'Headphones Pryma',
      value: '15.10',
      id: 6
  },
]
const notifications = [
    {
        image: cart1,
        name: 'Complete your profile info',
        value: '1 min ago',
        id: 1
    },
    {
        image: cart2,
        name: 'Answer your RFP',
        value: '4 hours ago',
        id: 2
    },
    {
        image: cart1,
        name: 'Your order is arrived the airport',
        value: 'yesturday',
        id: 3
    },
    {
        image: cart2,
        name: 'You are getting out of stock',
        value: '6 days ago',
        id: 4
    },

  ]

  const messages = [
    {
        image: cart1,
        name: 'Alejandro',
        value: 'Hi guys we are',
        id: 1
    },
    {
        image: cart2,
        name: 'Derek',
        value: 'Hi guys we are',
        id: 2
    },
    {
        image: cart1,
        name: 'Miriam',
        value: 'Hi guys we are',
        id: 3
    },
    {
        image: cart2,
        name: 'Juan',
        value: 'Hi guys we are',
        id: 4
    },

  ]
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
  const [openSearch, setSearch] = useState(null);
  const [expanded, setExpanded] = useState('0');
  const [menu, setMenu] = useState(false);

  const handleCloseMessages = () => {
    setMessages(null);
  };
  const handleClickMessages = event => {
    setMessages(event.currentTarget);
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
                            <span className="value">{carts.length < 10 ? `0${carts.length}` : carts.length}</span>
                        </li>
                        <li ><Link to ="/settings"><i className="fi flaticon-menu black" ></i></Link></li>
                        <li onClick={handleClickNotifications} ><i className="fi flaticon-mail black"></i></li>
                        <li onClick={handleClickMessages} ><i className="fi flaticon-quote black"></i></li>
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
                                    {carts.map((item, i) => (
                                        <li key={i}>
                                            <Button
                                                className="cartItem"
                                                component={Link}
                                                to="/product-details">
                                                <span className="cartImg">
                                                    <img src={item.image} alt="" />
                                                </span>
                                                <span className="cartContent">
                                                    <h4>{item.name}</h4>
                                                    <span>{`${item.value}`}</span>
                                                </span>
                                            </Button>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                            <h3>$150.10</h3>
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
                                    {messages.map((item, i) => (
                                        <li key={i}>
                                            <Button
                                                className="cartItem"
                                                component={Link}
                                                to="/product-details">
                                                <span className="cartImg">
                                                    <img src={item.image} alt="" />
                                                </span>
                                                <span className="cartContent">
                                                    <h4>{`${item.name} says:`}</h4>
                                                    <span>{`${item.value}`}</span>
                                                </span>
                                            </Button>
                                        </li>
                                    ))}
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
                                    {notifications.map((item, i) => (
                                        <li key={i}>
                                            <Button
                                                className="cartItem"
                                                component={Link}
                                                to="/product-details">
                                                <span className="cartImg">
                                                    <img src={item.image} alt="" />
                                                </span>
                                                <span className="cartContent">
                                                    <h4>{item.name}</h4>
                                                    <span>{`${item.value}`}</span>
                                                </span>
                                            </Button>
                                        </li>
                                    ))}
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

export default PrimaryNavigation;
