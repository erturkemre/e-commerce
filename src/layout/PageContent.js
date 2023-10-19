import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProductListPage from "../pages/ProductListPage";
import AboutPage from "../pages/AboutPage";

const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
            <MainPage/>
        </Route>
        <Route path="/shop" exact>
            <ProductListPage/>
        </Route>
        <Route path="/about" exact>
            <AboutPage/>
        </Route>
      </Switch>
    </>
  );
};
export default PageContent;
