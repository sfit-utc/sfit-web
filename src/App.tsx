import { Routes, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./Test";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
