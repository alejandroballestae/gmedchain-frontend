import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes 
import PrivateRoute from 'containers/_PrivateRoute'
import SupplierPrivateRoute from 'containers/_SupplierPrivateRoute'
import BuyerPrivateRoute from 'containers/_BuyerPrivateRoute'
import ShipperPrivateRoute from 'containers/_ShipperPrivateRoute'
import PublicRoute from 'containers/_PublicRoute'


// components 

// homes 
import HomePage from 'containers/HomePage/Loadable'


import BecomeSeller from 'containers/BecomeSeller'
import SupplierNetwork from 'containers/SupplierNetwork'
import Solutions from 'containers/Solutions'


import AboutUs from 'containers/AboutUs/Loadable'
import Author from 'containers/Author/Loadable'
import CategoryPage from 'containers/CategoryPage/Loadable'
import ProductDetails from 'containers/ProductDetails/Loadable'
import BlogPage from 'containers/BlogPage/Loadable'
import BlogDetails from 'containers/BlogDetails/Loadable'
import ContactPage from 'containers/ContactPage/Loadable'

import ShoppingCart from 'containers/ShoppingCart'
import ShoppingCartTwo from 'containers/ShoppingCartTwo'
import ShoppingCartThree from 'containers/ShoppingCartThree'
import OrderPlaced from 'containers/OrderPlaced'
import RegistrationMessagePage from 'containers/RegistrationMessagePage'
import ContactSupplierPage from 'containers/ContactSupplierPage'

import RegistrationPage from 'containers/RegistrationPage'
import VerificationCodePage from 'containers/VerificationCodePage'
import Dashboard from 'containers/Dashboard'
import SupplierDashboard from 'containers/SupplierDashboard'
import ShipperDashboard from 'containers/ShipperDashboard'
import Orders from 'containers/Orders'
import RFP from 'containers/RFP'
import Favorites from 'containers/Favorites'
import Profile from 'containers/Profile'
import Settings from 'containers/Settings'
import Membership from 'containers/Membership'
import Language from 'containers/Language'
import SocialMedia from 'containers/SocialMedia'
import Security from 'containers/Security'
import EmailNotifications from 'containers/EmailNotifications'
import PaymentsPage from 'containers/PaymentsPage'
import Inbox from 'containers/Inbox'
import Invoice from 'containers/Invoice'
import NewProduct from 'containers/NewProduct'
import CRM from 'containers/CRM'
import CRMDetail from 'containers/CRMDetail'
import Inventory from 'containers/Inventory'
import LoginPage from 'containers/LoginPage'
import ErrorPage from 'containers/ErrorPage/Loadable'

const Routes = (props) => {
    return (
        <Switch>
            <PublicRoute
                exact
                path="/"
                component={HomePage}
                
            />
          
           <PublicRoute
                exact
                path="/login"
                component={LoginPage}
          />
            <BuyerPrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
            />
           <SupplierPrivateRoute
                exact
                path="/new-product"
                component={NewProduct}
            />
           <PrivateRoute
                exact
                path="/CRM"
                component={CRM}
            />
            <PrivateRoute
                exact
                path="/inbox"
                component={Inbox}
            />
           <SupplierPrivateRoute
                exact
                path="/supplier-dashboard"
                component={SupplierDashboard}
            />
            <ShipperPrivateRoute
                exact
                path="/shipper-dashboard"
                component={ShipperDashboard}
            />
            <PublicRoute
                exact
                path="/registration-message"
                component={RegistrationMessagePage}
            />
            <PrivateRoute
                exact
                path="/membership"
                component={Membership}
            />
            <PrivateRoute
                exact
                path="/CRMDetail"
                component={CRMDetail}
            />
            <PrivateRoute
                exact
                path="/email-notifications"
                component={EmailNotifications}
            />
            <PrivateRoute
                exact
                path="/payments"
                component={PaymentsPage}
            />
            <PrivateRoute
                exact
                path="/orders"
                component={Orders}
            />
            <PrivateRoute
                exact
                path="/RFP"
                component={RFP}
            />
            <PrivateRoute
                exact
                path="/Favorites"
                component={Favorites}
            />
            <PrivateRoute
                exact
                path="/Profile"
                component={Profile}
            />
            <PrivateRoute
                exact
                path="/invoice"
                component={Invoice}
            />
            <PrivateRoute
                exact
                path="/security"
                component={Security}
            />
            <PrivateRoute
                exact
                path="/language"
                component={Language}
            />
          <PrivateRoute
                exact
                path="/social"
                component={SocialMedia}
            />
            <PublicRoute
                exact
                path="/verification"
                component={VerificationCodePage}
            />
            <PrivateRoute
                exact
                path="/inventory"
                component={Inventory}
            />
            <PublicRoute
                exact
                path="/registration"
                component={RegistrationPage}
            />
            <PublicRoute
                exact
                path="/BecomeSeller"
                component={BecomeSeller}
            />
            <PrivateRoute
                exact
                path="/checkout-two"
                component={ShoppingCartTwo}
            />
             <PrivateRoute
                exact
                path="/checkout-three"
                component={ShoppingCartThree}
            />
            <PrivateRoute
                exact
                path="/order-message"
                component={OrderPlaced}
            />
            <PrivateRoute
                exact
                path="/contact-supplier"
                component={ContactSupplierPage}
            />
            <PublicRoute
                exact
                path="/SupplierNetwork"
                component={SupplierNetwork}
            />
            <PublicRoute
                exact
                path="/Solutions"
                component={Solutions}
            />
            <PrivateRoute
                exact
                path="/cart"
                component={ShoppingCart}
            />
            <PublicRoute
                exact
                path="/about"
                component={AboutUs}
            />
            <PublicRoute
                exact
                path="/author"
                component={Author}
            />
            <PublicRoute
                exact
                path="/products"
                component={CategoryPage}
            />
            <PrivateRoute
                exact
                path="/settings"
                component={Settings}
            />
            <PublicRoute
                exact
                path="/product-details/:id"
                component={ProductDetails}
            />
            <PublicRoute
                exact
                path="/blog"
                component={BlogPage}
            />
            <PublicRoute
                exact
                path="/blog-details/:id"
                component={BlogDetails}
            />
            <PublicRoute
                exact
                path="/contact"
                component={ContactPage}
            />
            {/* <PublicRoute path="/maintenance" component={MaintenancePage} /> */}
            <Route component={ErrorPage} />
        </Switch>
    );
}
export default Routes