import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "../pages/MainPage";

const PageContent = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
            <MainPage/>
        </Route>
      </Switch>
    </>
  );
};
export default PageContent;
