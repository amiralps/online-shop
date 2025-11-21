import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Products from "./pages/Products";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ProductsDetail from "./pages/ProductsDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductsDetail />} />
          <Route path="*" element={<Navigate to={"/"} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
