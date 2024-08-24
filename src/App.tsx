import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./sections/Home";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
