import {BrowserRouter, Route, Routes} from "react-router-dom";
import Fetch from "./pages/Fetch";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Fetch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
