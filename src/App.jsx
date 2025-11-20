import {BrowserRouter, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
