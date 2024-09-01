import React from "react";
import Home from "./Home";
import Aim from "../../components/Aim/Aim";

function LandingPage(){
    return (
        <div className="overflow-x-hidden">
            <Home/>
            <Aim/>
        </div>
    )
}

export default LandingPage