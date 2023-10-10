import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import ProductListPage from "../pages/ProductListPage";

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
      </Switch>
    </>
  );
};
export default PageContent;
