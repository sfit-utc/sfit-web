import React from "react";
import Aim from "../../sections/Aim";
import Home from "./Home";

function LandingPage(){
    return (
        <div className="overflow-x-hidden">
            <Home/>
            <Aim/>
        </div>
    )
}

export default LandingPage