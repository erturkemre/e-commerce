import React from "react";
import PageContent from "./PageContent";
import Header from "./Header";
import SideBar from "./SideBar";
import Footer from "./Footer";

const Main = () => {
  return (
    <div className="flex flex-col w-[100vh] sm:w-[100%]">
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
