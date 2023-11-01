import React from "react";
import PricingHeader from "../components/PricingHeader";
import PricingFaqs from "../components/PricingFaqs";
import BrandBanner from "../components/BrandBanner";
import PricingCTA from "../components/PricingCTA";
import Pricing from "../Assets/Pricing";

const PricingPage = () => {
  return (
    <div className="">
      <PricingHeader />
      <Pricing />
      <BrandBanner />
      <PricingFaqs />
      <PricingCTA />
    </div>
  );
};

export default PricingPage;
