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
        <Route path="/shop/:id" exact>
          <ProductPage />
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
      </Switch>
    </>
  );
};
export default PageContent;
