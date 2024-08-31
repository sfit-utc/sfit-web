import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home";
import Aim from "./sections/Aim";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
