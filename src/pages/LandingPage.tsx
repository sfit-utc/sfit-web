
import Home from "./Home";
import Aim from "../components/Aim/Aim";
import Footer from "../components/Footer/Footer";
import Advisory from "../components/Advisory/Advisory";
import Classes from "../components/Classes/Classes";
import Competition from "../components/Competition/Competition";
import Leader from "../components/Leader/Leader";
import Teams from "../components/Teams/Teams";
import Event from "../components/Event/Event";
import Honors from "../components/Honors/Honors";
import FAQs from "../components/FAQs/FAQs";

function LandingPage() {
    return (
        <div className="overflow-x-hidden">
            <Home />
            <Aim />
            <Advisory />
            <Classes />
            <Competition />
            <Leader />
            <Teams />
            <Event />
            <Honors />
            <FAQs />
            <Footer />
        </div>
    )
}

export default LandingPage