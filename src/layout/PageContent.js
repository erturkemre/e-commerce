import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";
import TeamPage from "../pages/TeamPage";
import ProductPage from "../pages/ProductPage";
import ContactPage from "../pages/ContactPage";
import PricingPage from "../pages/PricingPage";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Cart from "../pages/Cart";
import OrderPage from "../pages/OrderPage";

const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/home" exact>
          <MainPage />
        </Route>
        <Route path="/shopping" exact>
          <ProductListPage />
        </Route>
        <Route path="/about" exact>
          <AboutPage />
        </Route>
        <Route path="/team" exact>
          <TeamPage />
        </Route>
        <Route path="/shopping/:id/:productName" exact>
          <ProductPage />
        </Route>
        <Route path="/shoping/:gender/:category?" exact>
          <ProductListPage />
        </Route>
        <Route path="/contact" exact>
          <ContactPage />
        </Route>
        <Route path="/pricing" exact>
          <PricingPage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/order" exact>
          <OrderPage />
        </Route>
      </Switch>
    </>
  );
};
export default PageContent;
