import React from "react";
import PageContent from './PageContent';
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="main-layout">
      <Header/>  
      <SideBar/>
      <PageContent />
      <Footer/>
    </div>
  );
};
export default Main;
