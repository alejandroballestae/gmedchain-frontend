import React from 'react';
import { Switch, Route } from 'react-router-dom';

// routes 
import PrivateRoute from 'containers/_PrivateRoute'

// components 

// homes 
import HomePage from 'containers/HomePage/Loadable'
import HomeStyleTwo from 'containers/HomeStyleTwo'
import BecomeSeller from 'containers/BecomeSeller'
import SupplierNetwork from 'containers/SupplierNetwork'
import Solutions from 'containers/Solutions'

import HomeThreeStyle from 'containers/HomeThreeStyle/Loadable'
import AboutUs from 'containers/AboutUs/Loadable'
import Author from 'containers/Author/Loadable'
import CategoryPage from 'containers/CategoryPage/Loadable'
import ProductDetails from 'containers/ProductDetails/Loadable'
import BlogPage from 'containers/BlogPage/Loadable'
import BlogDetails from 'containers/BlogDetails/Loadable'
import ContactPage from 'containers/ContactPage/Loadable'
import ErrorPage from 'containers/ErrorPage/Loadable'
import ShoppingCart from 'containers/ShoppingCart'
import ShoppingCartTwo from 'containers/ShoppingCartTwo'
import ShoppingCartThree from 'containers/ShoppingCartThree'
import OrderPlaced from 'containers/OrderPlaced'
import ContactSupplierPage from 'containers/ContactSupplierPage'
import LoginPage from 'containers/LoginPage'
import RegistrationPage from 'containers/RegistrationPage'
import VerificationCodePage from 'containers/VerificationCodePage'
import Dashboard from 'containers/Dashboard'
import SupplierDashboard from 'containers/SupplierDashboard'
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

const Routes = () => {
    return (
        <Switch>
            <PrivateRoute
                exact
                path="/"
                component={HomePage}
            />
            <PrivateRoute
                exact
                path="/home-two"
                component={HomeStyleTwo}
            />
            <PrivateRoute
                exact
                path="/home-three"
                component={HomeThreeStyle}
            />
           <PrivateRoute
                exact
                path="/login"
                component={LoginPage}
            />
           <PrivateRoute
                exact
                path="/dashboard"
                component={Dashboard}
            />
           <PrivateRoute
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
           <PrivateRoute
                exact
                path="/supplier-dashboard"
                component={SupplierDashboard}
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
            <PrivateRoute
                exact
                path="/verification"
                component={VerificationCodePage}
            />
            <PrivateRoute
                exact
                path="/inventory"
                component={Inventory}
            />
            <PrivateRoute
                exact
                path="/registration"
                component={RegistrationPage}
            />
            <PrivateRoute
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
            <PrivateRoute
                exact
                path="/SupplierNetwork"
                component={SupplierNetwork}
            />
            <PrivateRoute
                exact
                path="/Solutions"
                component={Solutions}
            />
            <PrivateRoute
                exact
                path="/cart"
                component={ShoppingCart}
            />
            <PrivateRoute
                exact
                path="/about"
                component={AboutUs}
            />
            <PrivateRoute
                exact
                path="/author"
                component={Author}
            />
            <PrivateRoute
                exact
                path="/products"
                component={CategoryPage}
            />
            <PrivateRoute
                exact
                path="/settings"
                component={Settings}
            />
            <PrivateRoute
                exact
                path="/product-details/:id"
                component={ProductDetails}
            />
            <PrivateRoute
                exact
                path="/blog"
                component={BlogPage}
            />
            <PrivateRoute
                exact
                path="/blog-details/:id"
                component={BlogDetails}
            />
            <PrivateRoute
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