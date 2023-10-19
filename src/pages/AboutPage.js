import React from "react";
import AboutBanner from "../components/AboutBanner";
import AboutVideoCard from "../components/AboutVideoCard";
import OurTeam from "../components/OurTeam";

const AboutPage = ()=>{
    return (
        <div className="">
            <AboutBanner />
            <div className="p-20">
                <div className="flex flex-row items-center justify-center">
                    <div className="p-8">
                        <p className="text-[#E74040]">Problems trying</p>
                        <h3 className="text-[#252B42] font-bold text-lg ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                    </div>
                    <div className="p-8">
                        <p className="text-[#737373] text-sm">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                        
                    </div>
                </div> 
            </div>
            <div className="h-[16.5rem]">
                <div className="flex flex-row items-center justify-center ">
                    <div className="flex flex-col items-center p-20">
                       <p className="text-[#252B42] font-Montserrat font-bold text-6xl">15K</p>
                       <p className="text-[#737373] font-Montserrat font-bold text-sm">Happy Customers</p>
                    </div>
                    <div className="flex flex-col items-center p-20">
                       <p className="text-[#252B42] font-Montserrat font-bold text-6xl">150K</p>
                       <p className="text-[#737373] font-Montserrat font-bold text-sm">Monthly Visitors</p>
                    </div>
                    <div className="flex flex-col items-center p-20">
                       <p className="text-[#252B42] font-Montserrat font-bold text-6xl">15</p>
                       <p className="text-[#737373] font-Montserrat font-bold text-sm">Countries Worldwide</p>
                    </div>
                    <div className="flex flex-col items-center p-20">
                       <p className="text-[#252B42] font-Montserrat font-bold text-6xl">100+</p>
                       <p className="text-[#737373] font-Montserrat font-bold text-sm">Top Partners</p>
                    </div>
                    
                </div> 
            </div>

            <AboutVideoCard />  
            <OurTeam />
        </div>
    )
};

export default AboutPage;