import React from "react";
import PageContent from "./PageContent";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="main-layout">
      <Header />
      <SideBar />
      <div className="page-body">
        <PageContent />
      </div>
      <Footer />
    </div>
  );
};
export default Main;
